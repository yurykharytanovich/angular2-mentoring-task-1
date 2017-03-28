import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuthenticated: boolean;
  confirmationVisible: boolean = false;
  targetID: number = null;
  constructor(
    @Inject('loginService') private loginService,
    @Inject('coursesService') private coursesService
) {	}

  public ngOnInit() {
    this.isAuthenticated = this.loginService.isAuthenticated();
  }

  public onRequestDeleteConfirmation(event) {
    console.log(`Course with id ${event.id} has been deleted.`);
    this.confirmationVisible = true;
    this.targetID = event.id;
  }

  public onConfirmationResponse(event) {
    this.confirmationVisible = false;
    if(event.response) {
      this.coursesService.deleteCourse(this.targetID);
    }
    this.targetID = null;
  }
}
