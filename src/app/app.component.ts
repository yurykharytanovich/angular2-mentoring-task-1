import {Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  private isAuthenticated: boolean;
  private _isAuthenticated: Observable<boolean>;
  confirmationVisible: boolean = false;
  targetID: number = null;
  private _isBlocked: Observable<boolean>;
  private isBlocked: boolean;
  constructor(
      @Inject('loginService') private loginService,
      @Inject('loaderBlockService') private loaderBlockService,
    @Inject('coursesService') private coursesService,
      private cd: ChangeDetectorRef
  ) {	}

  public ngOnInit() {
    this._isAuthenticated = this.loginService.isAuthenticated();
    this._isAuthenticated.subscribe((value) => {
      this.isAuthenticated = value;
      this.cd.markForCheck();
    });
    this._isBlocked = this.loaderBlockService.isBlocked();
    this._isBlocked.subscribe((value) => {
      this.isBlocked = value;
      this.cd.markForCheck();
    })
  }

  public onRequestDeleteConfirmation(event) {
    console.log(`Course with id ${event.id} has been deleted.`);
    this.confirmationVisible = true;
    this.targetID = event.id;
  }

  public onConfirmationResponse(event) {
    this.confirmationVisible = false;
    if(event.response) {
      this.loaderBlockService.show();
      setTimeout(() => {
          this.loaderBlockService.hide();
          this.coursesService.deleteCourse(this.targetID);
          this.targetID = null;
      }, this.loaderBlockService.TIMEOUT);
    } else {
      this.targetID = null;
    }
  }
}
