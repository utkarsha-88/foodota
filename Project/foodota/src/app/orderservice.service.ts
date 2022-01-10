import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

 

  baseUrl= 'http://localhost:9097/foodota/place/orders';
  baseUrldemo = 'http://localhost:9097/foodota/place/placeorder';
  baseurl1='http://localhost:9097/foodota/place/getordersbyid'

  constructor(private http:HttpClient,private route:ActivatedRoute) { 
  }

  

  newOrder(order:Object,user:string):Observable<Object>{

    
    return this.http.post(`${this.baseUrldemo}/${user}`,order);
  }

  getOrderList(user:string): Observable<any>{

    return this.http.get(`${this.baseUrl}/${user}`);
  }

  getOrderById(user:string):Observable<any>{
    return this.http.get(`${this.baseurl1}/${user}`)
  }
  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${orderId}`, { responseType: 'text' });
  }
}
