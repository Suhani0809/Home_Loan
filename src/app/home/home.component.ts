import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lflag:boolean=true;

  loggedin(){
    return localStorage.getItem('token');
  }

  loggedout(){
    return localStorage.removeItem('token');
  }

  login(){
    this.lflag=false;
  }

}
