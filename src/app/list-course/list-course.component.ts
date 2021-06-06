import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-course';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  courses = COURSES;
  selectedCourse!: Course;
  isClicked = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.courses);
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;

  }
  displayDialog(): any{
    this.isClicked = true;
  }
  closeDialog(): void{
    this.isClicked = false;
  }
}
