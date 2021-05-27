import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';

import { CadastroService } from '../cadastro.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

  
  
  selectedCadastro? : Cadastro;

  cadastros: Cadastro[]= [];


 

  constructor(private cadastroService: CadastroService, private messageService: MessageService) { }
  ngOnInit() {
    this.getCadastros();
  }
     
  getCadastros(): void {
    this.cadastroService.getCadastros()
    .subscribe(cadastros => this.cadastros = cadastros);
  }

  
}
