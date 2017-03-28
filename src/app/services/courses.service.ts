import { Injectable } from '@angular/core';
import Course from "../core/entities/course.class";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CoursesService {
  _courses: BehaviorSubject<Course[]> = <BehaviorSubject<Course[]>>new BehaviorSubject([]);

   private courses: Course[];
  constructor() {

    this.courses = [
      new Course("webpack",
        "This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
        25,
        new Date()
      ),
      new Course("typescript",
        "This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
        15,
        new Date()
      ),
      new Course("components",
        "This course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut blanditiis eveniet ipsam iste maxime obcaecati quo rem, ut.",
        45,
        new Date()
      )
    ]

    this._courses.next(this.courses);
  }

  getCourses(): Course[]{
    return this.courses;
  }

  get courses1() {
    return this._courses.asObservable();
  }

  addCourse(name: string, description: string, duration: number, date: Date) {
    this.courses.push(new Course(name,description, duration, date));
  }

  updateCourse(id: number, name: string, description: string, duration: number, date: Date) {

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
    this._courses.next(this.courses)
  }

}
