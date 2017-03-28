import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class LoginService {

  private user: string = 'user1';
  private password: string = 'password1';
  private authenticated: boolean;
  private zone: NgZone;
  constructor(zone: NgZone) {
    this.zone = zone;
    const loginObject = JSON.parse(localStorage.getItem('loginObject'));

    this.authenticated = loginObject && loginObject.user === this.user && loginObject.password === this.password;
  }


  login (user, password) {

    if(this.user === user && this.password === password) {
      const loginObject = { user: this.user, password: this.password };
      localStorage.setItem('loginObject', JSON.stringify(loginObject));
      this.zone.run(() => {
        this.authenticated = true;
      });
    }

  }

  logout () {
    localStorage.removeItem('loginObject');
    this.zone.run(() => {
      this.authenticated = false;
    });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUserInfo():string {
    const loginObject = JSON.parse(localStorage.getItem('loginObject'));
    return this.authenticated ? loginObject && loginObject.user : '';
  }

}
