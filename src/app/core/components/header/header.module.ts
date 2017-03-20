import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {LoginService} from "../../../services/login.service";
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent],
  providers: [{provide:'loginService', useClass:LoginService}]

})
export class HeaderModule {
	constructor() {
	}
}
