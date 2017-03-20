import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import Course from "../../core/entities/course.class";

@Component({
	selector: 'courses',
	styles: [require('./courses.styles.css')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {

	private courses: Course[] = [];
	constructor(
    @Inject('coursesService') private coursesService
  ) {}

	public ngOnInit() {
      this.courses = this.coursesService.getCourses();
	}

	public onItemDelete(event) {
		console.log(`Course with id ${event.id} has been deleted.`);
    this.coursesService.deleteCourse(event.id);
	}


	public ngOnDestroy() {
	}
}
