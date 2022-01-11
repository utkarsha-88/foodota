import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:9097/foodota/api/admin';

  constructor(private http: HttpClient) { }

  login(admin:any):Observable<any>{

    return this.http.post(`${this.baseUrl}`, admin);
  }

  isadminLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username');
  }
}
