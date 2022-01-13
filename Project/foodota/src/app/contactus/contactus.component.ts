import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup | any;
  contact: Contact = new Contact();
  submitted = false;
  user:any

  constructor(private formBuilder: FormBuilder,private cuService: ContactService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

  newComplain():void{

    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
   this.cuService.newComplain(this.contact)
     .subscribe(data => console.log(data), error => console.log(error));
   this.contact = new Contact();
   this.gotoList();
 }


 onSubmit() {
   this.submitted = true;
    
   this.save();
 }

 gotoList() {
   alert("Your Complain Has Been Successfully Register!!! Our Team Will Contact you shortly!!!");
   this.router.navigate(['']).then(() => {
     window.location.reload();

   });
 }
}
