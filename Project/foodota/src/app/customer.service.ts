import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl='http://localhost:9097/foodota/customer/customers';

  constructor(private http:HttpClient) { }

  getProductList(): Observable<any>{

    return this.http.get(`${this.baseUrl}`);
  }
  
  getProduct(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id:number,value:any):Observable<Object>{

    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
