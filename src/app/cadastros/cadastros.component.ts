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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cadastroService.addCadastro({ name } as Cadastro)
      .subscribe(cadastro => {
        this.cadastros.push(cadastro);
      });
  }

  delete(cadastro: Cadastro): void {
    this.cadastros = this.cadastros.filter(c => c !== cadastro);
    this.cadastroService.deleteCadastro(cadastro.id).subscribe();
  }

  
}
