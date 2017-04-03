import { Injectable } from '@angular/core';
import Course from "../core/entities/course.class";
import {BehaviorSubject, Observable} from "rxjs";
import {MyFilterPipe} from "../pipes/my-filter.pipe";

@Injectable()
export class CoursesService {
  private _courses: BehaviorSubject<Course[]>;
  private courses: Course[];

  constructor() {
    this.courses = [
      new Course("webpack",
        "This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
        135,
        new Date(Date.now() + 24 * 3600 * 1000),
          true
      ),
      new Course("typescript",
        "This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
        45,
        new Date(Date.now() - 14 * 24 * 3600 * 1000),
          false
      ),
      new Course("components",
        "This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
        65,
        new Date(Date.now() - 13 * 24 * 3600 * 1000),
          true
      )
    ];
    this._courses = <BehaviorSubject<Course[]>>new BehaviorSubject(this.courses);
  }

  getCourses(): Observable<Course[]> {
    return this._courses.asObservable();
  }

  setFilter(query: string):void {
    this._courses.next(MyFilterPipe.prototype.transform(this.courses,query));
  }

  addCourse(name: string, description: string, duration: number, date: Date, topRated: boolean) {
    this.courses.push(new Course(name,description, duration, date, topRated));
  }

  updateCourse(id: number, params : {
    name?: string,
    description?: string,
    duration?: number,
    date?: Date,
    topRated?: boolean
  }) {
    const course = this.courses.find((item) => item.id === id);
    Object.keys(params).forEach((key) => {
      course[key] = params[key];
    });
    this._courses.next(this.courses);
  }
  getCourse(id: number): Course {
    let result: Course = null;
    this.courses.forEach(course => {
      if(course.id === id) {
        result = course;
        return false;
      }
    });

    return result;
  }
  deleteCourse(id: number) {
    const index = this.courses.indexOf(this.getCourse(id));
    if(index > -1) {
      this.courses.splice(index,1);
    }
    this._courses.next(this.courses);
  }

}
