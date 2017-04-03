import { Injectable, NgZone } from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";

@Injectable()
export class LoginService {
  public __user: string = 'user1';
  public __password: string = 'password1';
  private user: string = this.__user;
  private password: string = this.__password;
  private authenticated: BehaviorSubject<boolean>;
  private userInfo: BehaviorSubject<string>;
  private LOGIN_TIMEOUT: number = 200;
  constructor() {
    const loginObject = JSON.parse(localStorage.getItem('loginObject'));
    const isLogin = loginObject && loginObject.user === this.user && loginObject.password === this.password;

    this.authenticated = <BehaviorSubject<boolean>>new BehaviorSubject(isLogin);
    this.userInfo = <BehaviorSubject<string>>new BehaviorSubject(isLogin ? loginObject.user : '');
  }

  login (user, password) {
    if(this.user === user && this.password === password) {
      const loginObject = { user: this.user, password: this.password };
      localStorage.setItem('loginObject', JSON.stringify(loginObject));
      setTimeout(() => {
        this.authenticated.next(true);
        this.userInfo.next(user);
      },this.LOGIN_TIMEOUT);
    }
  }

  logout () {
    localStorage.removeItem('loginObject');
    this.authenticated.next(false);
    this.userInfo.next('');
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  getUserInfo(): Observable<string> {
    return this.userInfo.asObservable();
  }
}
