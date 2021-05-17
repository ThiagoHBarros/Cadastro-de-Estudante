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

}

