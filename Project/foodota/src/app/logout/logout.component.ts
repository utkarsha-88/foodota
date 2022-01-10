import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    this.logoutService.logOut();

    this.router.navigate(["/login"]);
  }

}