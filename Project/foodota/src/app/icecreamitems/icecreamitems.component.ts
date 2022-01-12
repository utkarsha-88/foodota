import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { OrderserviceService } from '../orderservice.service';
import { Order } from '../order';

@Component({
  selector: 'app-icecreamitems',
  templateUrl: './icecreamitems.component.html',
  styleUrls: ['./icecreamitems.component.css']
})
export class IcecreamitemsComponent implements OnInit {

  order: Order = new Order();
  submitted = false;
  user: any;

  constructor(private oService: OrderserviceService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    
  }

  newProduct(): void {
    this.submitted = false;
    this.order = new Order();
  }

  save() {
     this.user = this.route.snapshot.params['id'];
    console.log(this.order);
    console.log(this.user);
    this.oService.newOrder(this.order,this.user)
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
    this.router.navigate(['/cart',this.user]).then(() => {
      window.location.reload();

    });
  }


}
