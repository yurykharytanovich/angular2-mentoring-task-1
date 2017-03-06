import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'courses',
	styles: [require('./courses.styles.css')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {
	constructor() {
	}

	public ngOnInit() {
	}

	public ngOnDestroy() {
	}
}
