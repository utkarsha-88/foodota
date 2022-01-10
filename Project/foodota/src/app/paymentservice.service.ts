import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  baseUrl = 'http://localhost:9097/foodota/payment/paymentorder'

  constructor(private http:HttpClient) { }

  newPayment(payment:Object,user:string){

    return this.http.post(`${this.baseUrl}/${user}`,payment);
  }
}
