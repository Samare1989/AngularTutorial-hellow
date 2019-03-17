import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = 'Samrawit';
  constructor() { }

  changename(){
    this.name = (this.name == 'Samrawit')? 'Amare':'Samrawit'
  }
  ngOnInit() {
  }

}
