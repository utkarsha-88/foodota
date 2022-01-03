import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'http://localhost:9097/foodota/api/customer';
  constructor(private http: HttpClient) { }

  login(customer:any):Observable<any>{

    return this.http.post('http://localhost:9097/foodota/api/customer', customer)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }
}
