import {
	Component, OnInit, Output, OnDestroy, Inject, EventEmitter, ChangeDetectionStrategy,
	Input, ChangeDetectorRef
} from '@angular/core';
import Course from "../../core/entities/course.class";
import {Observable} from "rxjs";

@Component({
	selector: 'courses',
	styles: [require('./courses.styles.css')],
	template: require('./courses.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit, OnDestroy {

	@Output() public requestDeleteConfirmation = new EventEmitter();
	public courses: Observable<Course[]>;
	constructor(
		@Inject('coursesService') private coursesService,
		private cd: ChangeDetectorRef
	) {}

	public ngOnInit() {
      this.courses = this.coursesService.getCourses();
		this.courses.subscribe(() => {
			this.cd.markForCheck(); // marks path
		})
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
