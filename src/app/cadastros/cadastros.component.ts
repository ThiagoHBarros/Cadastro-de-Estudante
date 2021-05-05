import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { CADASTROS} from '../alunos-cadastrados';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

   cadastro: Cadastro = {
   
    name: '',
    email: '',
    telefone: '',
    end: '',
    curso: ''
  };

  cadastros = CADASTROS;
 

  constructor() { }

  ngOnInit(): void {
  }

}
