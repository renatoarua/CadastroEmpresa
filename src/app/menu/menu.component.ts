import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import { Router, RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  screenWidth: number;

constructor(
  private router: Router,
  private appc: AppComponent
  ) {
  // set screenWidth on page load
  this.screenWidth = window.innerWidth;
  window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
}

  ngOnInit() {
  }

  logar() {
    localStorage.setItem('Logado', JSON.stringify(false));
    this.appc.ngOnInit();
  }

}
