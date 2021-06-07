import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../course'
import { COURSES } from '../mock-course';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses = COURSES;
  selectedCourse: any;
  constructor() { }

  getCourses(): Observable<Course[]> {
    const courses = of(COURSES);
    return courses;
  }

  getCourseDetail(id: number): Observable<Course> {
    this.courses.forEach(course => {
      if (course.id === id) {
        this.selectedCourse = course;
      }
    });
    console.log("get course detail");
    console.log(this.selectedCourse);
    return this.selectedCourse;
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  editCourse(editedCourse:Course) {
    this.courses.forEach(course => {
      if (course.id === editedCourse.id) {
        course = editedCourse;
        console.log("Service edit: ",course);
      }
    })
  }
}
