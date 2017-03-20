// angular modules
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import {CoursesService} from "../../services/courses.service";

@NgModule({
	declarations: [
		CoursesComponent,
		CourseItemComponent
	],
	imports: [
		CommonModule
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
