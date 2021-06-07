import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COURSES } from '../mock-course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  course: any;
  nameCourse = COURSES
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.course = this.courseService.getCourseDetail(id);
  }
  
  
}
