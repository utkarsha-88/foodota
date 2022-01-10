import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id: number = 0;
  customer: Customer | any;
  submitted = false;
  customers: Observable<Customer[]> | any;

  constructor(private cService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.customer = new Customer();
    this.id = this.route.snapshot.params['id'];
    this.cService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.cService.updateProduct(this.id, this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.gotoList();
  }

  onSubmit() {
    this.updateProduct();
  }
 
  gotoList() {
    this.router.navigate(['home',this.id]).then(() => {
      window.location.reload();
    });
  }

}
