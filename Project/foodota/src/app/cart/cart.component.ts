import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Order } from '../order';
import { OrderserviceService } from '../orderservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order: Observable<Order[]> | any;

  constructor(private oService: OrderserviceService, private router:Router) { }

  ngOnInit(): void {
    
    this.reloadData();
  }
  reloadData() {

    this.order = this.oService.getOrderList();
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
    this.router.navigate(['payment']).then(() => {
      window.location.reload();

    });
  }
}
