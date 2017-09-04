import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comic-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isIn: boolean;

  constructor() { }

  toggleState(){ // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false;
  }

  ngOnInit() {
      this.isIn = false;   // store state
      this.toggleState();

  }

}
