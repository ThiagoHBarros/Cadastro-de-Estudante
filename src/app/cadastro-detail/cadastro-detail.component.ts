import { Component, OnInit, Input } from '@angular/core';
import { Cadastro  } from '../cadastro';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CadastroService } from '../cadastro.service';


@Component({
  selector: 'app-cadastro-detail',
  templateUrl: './cadastro-detail.component.html',
  styleUrls: ['./cadastro-detail.component.css']
})

export class CadastroDetailComponent implements OnInit {

  cadastro?: Cadastro;

  constructor( private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private location: Location) { }

    ngOnInit(): void {
      this.getCadastro();
    }
    
    getCadastro(): void {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.cadastroService.getCadastro(id)
        .subscribe(cadastro => this.cadastro = cadastro);
    }
    
    goBack(): void {
      this.location.back();
    } 

    save(): void {
      if (this.cadastro) {
        this.cadastroService.updateCadastro(this.cadastro)
          .subscribe(() => this.goBack());
      }
    }

}
