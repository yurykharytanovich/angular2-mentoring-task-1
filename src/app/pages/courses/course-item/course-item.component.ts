import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.css')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseItemComponent {
	@Input() public course: CourseItem;

	constructor() {
	}
}
