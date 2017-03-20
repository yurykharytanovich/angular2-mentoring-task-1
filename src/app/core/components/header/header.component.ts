import { Component, OnInit, Inject } from '@angular/core';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.css')],
	providers: []
})
export class HeaderComponent implements OnInit{

	public query: string = '';
  public currentUser: string = '';
  public user: string = '';
  public password: string = '';

  isAuthenticated: boolean;
	constructor(
    @Inject('loginService') private loginService
  ) {	}

  ngOnInit() {
    this.currentUser = this.loginService.getUserInfo();
    this.isAuthenticated = this.loginService.isAuthenticated();
  }

	onFindClick() {
		console.log(this.query)
	}

  onLoginClick() {
    this.loginService.login(this.user, this.password);
    this.isAuthenticated = this.loginService.isAuthenticated();
    this.currentUser = this.loginService.getUserInfo();
  }

  onLogOutClick() {
    this.loginService.logout();
    this.isAuthenticated = this.loginService.isAuthenticated();
    this.currentUser = '';
  }
}
