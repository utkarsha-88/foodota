import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;
data:any;

  constructor(private aService: AdminService, private router: Router) {

  }

  ngOnInit(): void {


  }

  checkLogin() {
    let admin = {
      "username": this.username,
      "password": this.password
    }
    this.aService.login(admin).subscribe((response) => {
      console.log(response.id);
      if (response) {
        // response.array.forEach((element: { id: any; }) => {
        //   console.log(element.id);
          
        // });
        this.router.navigate(['/adminconsole']);
        // this.router.navigate(['']);
        sessionStorage.setItem('username', this.username)
        var data = sessionStorage.getItem('username');
       // console.log(data);
        
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
