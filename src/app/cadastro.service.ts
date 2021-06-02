import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';
import { CADASTROS } from './alunos-cadastrados';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private cadastrosUrl = 'http://localhost:3000/cadastros';  

  private  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private log(message: string) {
    this.messageService.add(`CadastroService: ${message}`);
  }


  constructor( private http: HttpClient, private messageService: MessageService) { }

  
  getCadastros(): Observable<Cadastro[]> {
  return this.http.get<Cadastro[]>(this.cadastrosUrl)
  .pipe(
    tap(_ => this.log('fetched cadastros')),
    catchError(this.handleError<Cadastro[]>('getCadastros', []))
  );
}

  

  getCadastro(id: string): Observable<Cadastro> {
    const url = `${this.cadastrosUrl}/${id}`;
    return this.http.get<Cadastro>(url).pipe(
      tap(_ => this.log(`fetched cadastro id=${id}`)),
      catchError(this.handleError<Cadastro>(`getCadastro id=${id}`))
    );
  }

  
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); 
  
    this.log(`${operation} failed: ${error.message}`);
    
    return of(result as T);
  };
}

updateCadastro(cadastro: Cadastro): Observable<any> {
  const url = `${this.cadastrosUrl}/${cadastro.id}`;
  return this.http.put(this.cadastrosUrl, cadastro, this.httpOptions).pipe(
    tap(_ => this.log(`updated cadastro id=${cadastro.id}`)),
    catchError(this.handleError<any>('updateCadastro'))
  );
}


addCadastro(cadastro: Cadastro): Observable<Cadastro> {
  return this.http.post<Cadastro>(this.cadastrosUrl, cadastro, this.httpOptions).pipe(
    tap((newCadastro: Cadastro) => this.log(`added cadastro w/ id=${newCadastro.id}`)),
    catchError(this.handleError<Cadastro>('addcadastro'))
  );
}


deleteCadastro(id: string): Observable<Cadastro> {
  const url = `${this.cadastrosUrl}/${id}`;

  return this.http.delete<Cadastro>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted cadastro id=${id}`)),
    catchError(this.handleError<Cadastro>('deleteCadastro'))
  );
}


}

