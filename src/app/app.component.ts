import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuthenticated: boolean;
  constructor(
    @Inject('loginService') private loginService
  ) {	}

  public ngOnInit() {
    this.isAuthenticated = this.loginService.isAuthenticated();
  }

}
