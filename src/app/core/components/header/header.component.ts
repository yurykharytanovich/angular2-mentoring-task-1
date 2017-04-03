import {Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Observable} from "rxjs";

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.css')],
	providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{
    public query: string = '';
    public user: string = '';
    public password: string = '';

    private isAuthenticated: boolean;
    private _isAuthenticated: Observable<boolean>;
    private userInfo: string;
    private _userInfo: Observable<string>;
	constructor(
        @Inject('loginService') private loginService,
        @Inject('loaderBlockService') private loaderBlockService,
        private cd: ChangeDetectorRef

    ){}

    ngOnInit() {
        this.user = this.loginService.__user;
        this.password = this.loginService.__password;
        this._isAuthenticated = this.loginService.isAuthenticated();
        this._isAuthenticated.subscribe((value) => {
            this.isAuthenticated = value;
            if(value) {
                this.loaderBlockService.hide();
            }
            this.cd.markForCheck();
        });

        this._userInfo = this.loginService.getUserInfo();
        this._userInfo.subscribe((value) => {
            this.userInfo = value;
            this.cd.markForCheck();
        });
    }

	onFindClick() {
		console.log(this.query)
	}

    onLoginClick() {
        this.loaderBlockService.show();
        this.loginService.login(this.user, this.password);
    }

    onLogOutClick() {
        this.loginService.logout();
    }
}
