import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'})
export class AuthAdminService {

  isUserLoggedIn: boolean = false;
  private roleA: any;

  login(email: string, password: string, idRole : string): Observable <any> {
    this.isUserLoggedIn = email == 'admin' && password == 'admin';
    localStorage.setItem('tokenString', this.isUserLoggedIn ? "true" : "false");
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("Is User Authentication is successful");
      })
    );
  }
  // getAdmin(): string{
  //   return this.roleA = '3';
  // }
  logout(): void {
    localStorage.clear();
  }

  constructor() { }}
