import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = 'http://localhost:9097/foodota/contact/contactus'

  constructor(private http:HttpClient) { }

  newComplain(contact:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}`,contact);
  }
}
