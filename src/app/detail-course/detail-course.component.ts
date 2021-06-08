import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COURSES } from '../mock-course';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  course: any;
  nameCourse = COURSES;
  
  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
   ) { }

  ngOnInit() {
    this.getCourse();
  }
  getCourse(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.course = this.courseService.getCourseDetail(id);
  }
  
}
