import { Component, Inject, Input, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-course';
import { DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  courses = COURSES;
  selectedCourse!: Course;
  isClicked = false;
  popup = document.getElementById("popupDetail");
  @Input() course?: Course;
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
