import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-index-course',
  templateUrl: './index-course.component.html',
  styleUrls: ['./index-course.component.scss']
})
export class IndexCourseComponent implements OnInit {
  courses : Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
