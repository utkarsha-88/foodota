import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loginService: AuthenticationService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    
  }

  onItemSelect(){ 

    this.router.navigate(['/item',this.route.snapshot.paramMap.get('id')]);
  }
}
