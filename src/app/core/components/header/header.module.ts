import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {LoginService} from "../../../services/login.service";
import { CommonModule } from '@angular/common';
import {LoaderBlockService} from "../../../services/loader-block.service";
import {CoursesService} from "../../../services/courses.service";

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent],
  providers: [{provide:'loginService', useClass:LoginService},{ provide:'loaderBlockService', useClass:LoaderBlockService},{provide:'coursesService', useClass:CoursesService}]

})
export class HeaderModule {
	constructor() {
	}
}
