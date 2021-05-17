import { Component, OnInit, Input } from '@angular/core';
import { Cadastro  } from '../cadastro';


@Component({
  selector: 'app-cadastro-detail',
  templateUrl: './cadastro-detail.component.html',
  styleUrls: ['./cadastro-detail.component.css']
})

export class CadastroDetailComponent implements OnInit {

  @Input() cadastro?: Cadastro;

  constructor() { }

  ngOnInit(): void {
  }

}
