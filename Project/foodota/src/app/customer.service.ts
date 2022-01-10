import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl='http://localhost:9097/foodota/customer/customers';

  constructor(private http:HttpClient) { }

  
  getProduct(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id:number,value:any):Observable<Object>{

    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

}
