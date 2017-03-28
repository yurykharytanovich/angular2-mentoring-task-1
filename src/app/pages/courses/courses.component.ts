import {Component, OnInit, Output, OnDestroy, Inject, EventEmitter} from '@angular/core';
import Course from "../../core/entities/course.class";

@Component({
	selector: 'courses',
	styles: [require('./courses.styles.css')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {

	private courses: Course[] = [];
	@Output() public requestDeleteConfirmation = new EventEmitter();


	constructor(
    @Inject('coursesService') private coursesService
  ) {}

	public ngOnInit() {
      this.courses = this.coursesService.getCourses();
	}

	public ngOnDestroy() {
	}

	public onItemDelete(event) {
		console.log(`Course with id ${event.id} will be deleted.`);
		this.requestDeleteConfirmation.emit({
			id: event.id
		});
	}
}
