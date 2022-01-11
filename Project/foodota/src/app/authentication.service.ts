import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
 

  baseUrl = 'http://localhost:9097/foodota/api/customer';

  baseUrl1 = 'http://localhost:9097/foodota/customer/customers';
  constructor(private http: HttpClient) { }

  login(customer:any):Observable<any>{

    return this.http.post('http://localhost:9097/foodota/api/customer', customer);


  }

  // authenticate(username:string, password:string){
  //   if (username === "admin" && password === "admin") {
  //         sessionStorage.setItem('username', username)
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username');
  }

  saveCustomer(customer: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl1}`, customer);
  }
  
  getCustomerById(id: string): Observable<any>{

    return this.http.get(`${this.baseUrl}`);
  }

  
}
