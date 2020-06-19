import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navClick:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
  tocarNavbar(){
    this.navClick = !this.navClick;
  }

}
