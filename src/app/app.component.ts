import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logradouroInformado!: string;
  pesquisa(){
    console.log("Pesquisou " + this.logradouroInformado);
  }
}
