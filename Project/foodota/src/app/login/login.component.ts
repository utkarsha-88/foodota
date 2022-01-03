import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;


  constructor(private lService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    let customer = {
      "email": this.username,
      "password": this.password
    }
    this.lService.login(customer).subscribe((response) => {
      console.log(response);
      if (response) {
        this.router.navigate(['']);
        sessionStorage.setItem('username', this.username)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
    }
      else {
        this.invalidLogin = true
      }
    });
    this.loginSuccess = false;

  }
}
