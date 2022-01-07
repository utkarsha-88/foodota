import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderserviceService } from '../orderservice.service';
import { Order } from '../order';
@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  item1: string = "Burger";
  price1: number = 150.00;


  order: Order = new Order();
  submitted = false;

  constructor(private oService: OrderserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.order = new Order();
  }

  save() {
    console.log(this.order);
    this.oService.newOrder(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.order = new Order();
    // this.gotoList();
  }


  onSubmit(productName: string, productPrice: number, productQuantity: number) {
    this.order.orderName = productName;
    this.order.orderPrice = productPrice;
    this.order.qty = productQuantity;

    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();

    });
  }
}
