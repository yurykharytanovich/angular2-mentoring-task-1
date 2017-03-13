import { Component, OnInit, OnDestroy } from '@angular/core';
import Course from "../../core/entities/course.class";

@Component({
	selector: 'courses',
	styles: [require('./courses.styles.css')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {

	private courses: Course[] = [];
	constructor() {
	}

	public ngOnInit() {
		this.courses.push(new Course("webpack",
			"This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
			25,
			new Date()
		));
		this.courses.push(new Course("typescript",
			"This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
			15,
			new Date()
		));
		this.courses.push(new Course("components",
			"This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
			45,
			new Date()
		));
	}

	public onItemDelete(event) {
		console.log(`Course with id ${event.id} has been deleted.`);
	}
	public ngOnDestroy() {
	}
}
