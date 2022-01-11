import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  customer: Observable<Customer[]> | any;
  constructor(private cService: CustomerService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {

    this.customer = this.cService.getProductList();
  }
  deleteProduct(id: number) {
    this.cService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
