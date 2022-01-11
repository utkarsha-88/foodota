import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { AdminService } from './admin.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodota';

  id: any;
  constructor(public loginService : AuthenticationService, public aService:AdminService,private route:ActivatedRoute, private router:Router){}

  // onItemSelect(){ 

  //   this.router.navigate(['account',this.route.snapshot.paramMap.get('id')]);
  // }
  editProduct() {
    this.id =  this.route.snapshot.params['id'];
    this.router.navigate(['account',this.id])  
  }
}
