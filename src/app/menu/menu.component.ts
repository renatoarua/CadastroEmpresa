import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  screenWidth: number;

constructor() {
  // set screenWidth on page load
  this.screenWidth = window.innerWidth;
  window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
}

  ngOnInit() {
  }

}
