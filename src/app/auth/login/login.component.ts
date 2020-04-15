import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public emailLogin = false;
  public verifying = false;

  constructor() { }

  ngOnInit(): void {
  }

  public loginWithEmail() {
    this.emailLogin = true;
  }

  public login() {
    this.verifying = true;
  }

}
