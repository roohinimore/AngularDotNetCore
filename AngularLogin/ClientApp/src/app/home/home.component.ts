import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  loginObj: Login;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Login>(baseUrl + 'Login').subscribe(result => {
      this.loginObj = result;
    }), error => console.error(error));
  }
}

interface Login{
  UserName: string;
  Password: string;
}
