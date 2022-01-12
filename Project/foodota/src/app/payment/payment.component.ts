import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Payment } from '../payment';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup | any;
  payment: Payment = new Payment();
  submitted = false;
  user:any
  amount:any

  constructor(private formBuilder: FormBuilder,private pService: PaymentserviceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.paymentForm = this.formBuilder.group({
      cardName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      cvv: ['', [Validators.required, Validators.maxLength(3)]],
      cardNumber: ['', [Validators.required,Validators.maxLength(16)]],
      expires: ['', [Validators.required,Validators.pattern("\\d{4}-\\d{2}-\\d{2}")]]
    });
  }

  get f() { return this.paymentForm.controls; }
 

  save() {
    this.user = this.route.snapshot.params['id'];
    this.amount = this.route.snapshot.params['amount'];
   console.log(this.payment);
   console.log(this.user);
   this.pService.newPayment(this.payment,this.user, this.amount)
     .subscribe(data => console.log(data), error => console.log(error));
   this.payment = new Payment();
   this.gotoList();
 }


 onSubmit() {
   this.submitted = true;
   this.payment=this.paymentForm.value;
    // stop the process here if form is invalid
    if (this.paymentForm.invalid) {
        return;
    }
   this.save();
 }

 gotoList() {
   alert("Your Order  of ₹" +this.amount+ " Has Been Placed Successfully!!!")
   this.router.navigate(['/home',this.route.snapshot.paramMap.get('id')]).then(() => {
     window.location.reload();

   });
 }

 
}
