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

  onburger(){ 

    this.router.navigate(['/item',this.route.snapshot.paramMap.get('id')]);
  }

  onCake(){ 

    this.router.navigate(['/cake',this.route.snapshot.paramMap.get('id')]);
  }

  onPizza(){ 

    this.router.navigate(['/pizza',this.route.snapshot.paramMap.get('id')]);
  }

  onBriyani(){ 

    this.router.navigate(['/briyani',this.route.snapshot.paramMap.get('id')]);
  }
  onDrinks(){ 

    this.router.navigate(['/drinks',this.route.snapshot.paramMap.get('id')]);
  }

  onIcecream(){ 

    this.router.navigate(['/ice',this.route.snapshot.paramMap.get('id')]);
  }
}
