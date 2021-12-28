import { Component } from '@angular/core';
import { Endereco } from './endereco';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  displayedColumns = ['rua', 'numero'];
  enderecos: Endereco[] = [];
  
  rua!: string;
  numero!: number;

  constructor(private service: EnderecoService,
    ) {}

  pesquisa(){
    this.service.buscaComFiltro(this.rua, this.numero).subscribe(response=>this.enderecos=response)
  }

}