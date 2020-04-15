import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public verifying = false;

  constructor() { }

  ngOnInit(): void {
  }

  public login() {
    this.verifying = true;
  }
}
