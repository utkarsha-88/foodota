import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Order } from '../order';
import { OrderserviceService } from '../orderservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order: Observable<Order[]> | any;
  user: any;
  total: number = 0

  

  constructor(private oService: OrderserviceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    // this.findsum();

    this.reloadData();
   
  }
   
  reloadData() {

    this.user = this.route.snapshot.paramMap.get('id');
    this.order = this.oService.getOrderById(this.user);
  }

  
  deleteProduct(orderId: number) {
    this.oService.deleteOrder(orderId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['payment',this.user]).then(() => {
      window.location.reload();

    });
  }

  
}
