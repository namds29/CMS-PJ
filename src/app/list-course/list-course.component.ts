import { Component, Inject, Input, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-course';
import { DOCUMENT} from '@angular/common';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  courses: Course[] = [];
  selectedCourse!: Course;
  isClicked = false;
  popup = document.getElementById("popupDetail");
  //@Input() course?: Course;
  constructor( private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
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
