import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {LoginService} from "../../../services/login.service";
import { CommonModule } from '@angular/common';
import {LoaderBlockService} from "../../../services/loader-block.service";

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent],
  providers: [{provide:'loginService', useClass:LoginService},{ provide:'loaderBlockService', useClass:LoaderBlockService}]

})
export class HeaderModule {
	constructor() {
	}
}
