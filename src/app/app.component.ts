import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CadastroEmpresa';
  logado = false;

  ngOnInit() {

    this.mostrarMenu();

  }



  mostrarMenu() {

    this.logado = JSON.parse(localStorage.getItem('Logado'));

  }

}
