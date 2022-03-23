import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRolesModel} from "../models/userRoles.model";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  url = "https://localhost:7141/api/Auth/login";
  constructor(private http : HttpClient) { }
  login(email : any, password:any){
    return this.http.post(this.url, {
        "email": email,
        "password": password
      }
    );

  }
  isLoggedIn(){
    return localStorage.getItem('tokenString') != null;
  }
  getUser(token : string): UserRolesModel{
    return JSON.parse(atob(token.split(".")[1])) as UserRolesModel;
  }
  userId(): string {
    return this.getUser(this.getToken()).id;
  }
  getToken() : string {
     return localStorage.getItem('tokenString');
  }
}
