// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';

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
	providers: []
})
export class CoursesModule {
	constructor() {
	}
}
