import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  baseUrl= 'http://localhost:9097/foodota/place/orders';
  baseUrldemo = 'http://localhost:9097/foodota/place/placeorder/me@gmail.com';

  constructor(private http:HttpClient) { }

  newOrder(order:Object):Observable<Object>{//Creating New Product In Inventory Project In ECLIPSE

    return this.http.post(`${this.baseUrldemo}`,order);
  }

  getOrderList(): Observable<any>{

    return this.http.get(`${this.baseUrl}`);
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${orderId}`, { responseType: 'text' });
  }
}
