import {
	Component, OnInit, Output, Inject, EventEmitter, ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import Course from "../../core/entities/course.class";
import {Observable} from "rxjs";

@Component({
	selector: 'courses',
	styles: [require('./courses.styles.css')],
	template: require('./courses.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {

	@Output() public requestDeleteConfirmation = new EventEmitter();
	public courses: Observable<Course[]>;
	private noCourses: boolean;
	constructor(
		@Inject('coursesService') private coursesService,
		private cd: ChangeDetectorRef
	) {}

	public ngOnInit() {
      this.courses = this.coursesService.getCourses();
		this.courses.subscribe((value) => {
			this.noCourses = value.length === 0;
			this.cd.markForCheck(); // marks path
		});
	}

	public onRateClick(event) {
		this.coursesService.updateCourse(event.id, {topRated: !event.topRated});
	}

	public onItemDelete(event) {
		console.log(`Course with id ${event.id} will be deleted.`);
		this.requestDeleteConfirmation.emit({
			id: event.id
		});
	}
}
