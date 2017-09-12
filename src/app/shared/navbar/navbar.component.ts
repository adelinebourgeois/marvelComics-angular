import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comic-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isIn: boolean;

  constructor() { }

  /*  Menu burger click*/
  toggleState() {
      const bool = this.isIn;
      this.isIn = bool === false ? true : false;
  }

  ngOnInit() {
      this.isIn = true;
      this.toggleState();
  }

}
