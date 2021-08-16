import { Component } from '@angular/core';
import { DocumentsService } from './documents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeLoan';

  loggedin(){
    return localStorage.getItem('token');
  }

  loggedout(){
    return localStorage.removeItem('token');
  }
  
}
