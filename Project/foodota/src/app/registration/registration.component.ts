import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  customer: Customer = new Customer();
  constructor(private formBuilder: FormBuilder, private aService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({

      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNo: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
    });
  }

  get f() { return this.registerForm.controls; }

  // changeCity(e:any) {
  //   this.registerForm.get('city').setValue(e.target.value, {
  //    onlySelf: true
  //   })
  // }

  Customer(): void {
    this.submitted = false;
    this.customer= new Customer();
  }

  onSubmit() {
    this.submitted = true;
this.customer=this.registerForm.value;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.save();
}
 
save() {

  this.aService.saveCustomer(this.customer)
    .subscribe(data => console.log(data), error => console.log(error));
  this.customer= new Customer();
 // this.address=new Address();
 
  this.gotoList();
}
 
gotoList() {
  this.router.navigate(['/login']);
}
}
