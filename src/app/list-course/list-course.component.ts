import { Component, OnInit } from '@angular/core';
import { COURSES } from '../mock-course';
import { Course } from '../course';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  courses = COURSES;
  selectedCourse!: Course;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.courses);
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;

  }
}
