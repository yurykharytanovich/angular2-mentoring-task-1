import {Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import Course from '../../../core/entities/course.class';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.css')],
	providers: [],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
	@Input() public course: Course;
	@Output() public delete = new EventEmitter();

	constructor() {
	}

	onDelete(id) {
		this.delete.emit({id:id});
	}
}
