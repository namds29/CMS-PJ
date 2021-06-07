import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { COURSES } from '../mock-course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses = COURSES;
  selectedCourse: any;
  constructor() { }

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


}
