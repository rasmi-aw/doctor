import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string
  password: string

  constructor() {
    this.login = ""
    this.password = ""
  }
}
