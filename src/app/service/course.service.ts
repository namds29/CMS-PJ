import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [];
  selectedCourse: any;
  constructor() { }

  getCourses(): Course[] {
    // const courses = of(COURSES);
    return this.courses;
  }

  getCourseDetail(id: string): Observable<Course> {
    this.courses.forEach(course => {
      if (course.id === id) {
        this.selectedCourse = course;
        console.log(this.selectedCourse);
        
      }
    });
    console.log("get course detail");
    console.log(this.selectedCourse);
    return this.selectedCourse;
  }

  addCourse(course: Course) {
    this.courses.push(course);
    console.log("new list: ", this.courses);
  }

  editCourse(editedCourse:Course) {
    // this.courses.forEach(course => {
    //   if (course.id === editedCourse.id) {
    //    this.courses 
    //     console.log("Service edit: ",course);
    //   }
    //   console.log("updated: ",this.courses); 
    // });
     for(let i=0;i<this.courses.length;i++){
      if(this.courses[i].id=== editedCourse.id){
        this.courses[i] = editedCourse;
      }
    }
    console.log("updated: ",this.courses); 
    
  }
}
