import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  course: any;
  nameCourse:Course[]=[];
  
  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
   ) { }

  ngOnInit() {
    this.getCourse();
    this.nameCourse = this.courseService.getCourses();
    
  }
  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.getCourseDetail(id);
  }
  
}
