import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  baseUrl= 'http://localhost:9097/foodota/place/orders';

  constructor(private http:HttpClient) { }

  newOrder(order:Object):Observable<Object>{//Creating New Product In Inventory Project In ECLIPSE

    return this.http.post(`${this.baseUrl}`,order);
  }
}
