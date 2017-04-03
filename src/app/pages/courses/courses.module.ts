// angular modules
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import {CoursesService} from "../../services/courses.service";
import { DirectivesModule } from '../../core/directives/directives.module';
import {DurationPipe} from "../../pipes/duration.pipe";
import {MyOrderByPipe} from "../../pipes/my-order-by.pipe";

@NgModule({
	declarations: [
		CoursesComponent,
		CourseItemComponent,
		DurationPipe,
		MyOrderByPipe
	],
	imports: [
		CommonModule,
		DirectivesModule
	],
	exports: [
		CoursesComponent
	],
	providers: [{provide:'coursesService', useClass:CoursesService}]
})
export class CoursesModule{
	constructor() {
	}
}
