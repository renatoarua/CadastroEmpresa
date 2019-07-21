import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private appc: AppComponent
    ) { }

  ngOnInit() {
  }

  logar() {
    localStorage.setItem('Logado', JSON.stringify(true));
    this.appc.ngOnInit();
    //this.router.navigate(['/lista-empresa']);
  }

}
