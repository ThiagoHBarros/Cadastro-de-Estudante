import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';
import { CADASTROS } from './alunos-cadastrados';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private messageService: MessageService) { }

  getCadastros(): Observable<Cadastro[]> {
    const cadastros = of(CADASTROS);
    this.messageService.add('CadastroService: fetched cadastros');
    return cadastros;
  }

  getCadastro(id: number): Observable<Cadastro> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const cadastro = CADASTROS.find(c => c.id === id)!;
    this.messageService.add(`CadastroService: fetched cadastro id=${id}`);
    return of(cadastro);
  }

}

