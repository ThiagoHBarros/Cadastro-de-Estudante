import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  cadastros: Cadastro[] = [];

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.getCadastros();
  }

  getCadastros(): void {
    this.cadastroService.getCadastros()
      .subscribe(cadastros => this.cadastros = cadastros.slice(0, 4));
  }
}