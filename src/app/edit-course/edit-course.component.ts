import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  course: any;

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
