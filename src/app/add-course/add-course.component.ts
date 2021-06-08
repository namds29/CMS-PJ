import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  addForm = this.fb.group({
    id: [null, Validators.required],
    name: [null, Validators.required],
    startDate: [null, Validators.required],
    lecturer: [null, Validators.required],
    classId: [null, Validators.required],
    content: [null, Validators.required]
  })

  constructor(
    private courseService: CourseService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submitted = false;

  addCourse(): void { 
    let newCourse = new Course(
      this.addForm.controls.id.value,
      this.addForm.controls.name.value,
      this.addForm.controls.startDate.value,
      this.addForm.controls.lecturer.value,
      this.addForm.controls.classId.value,
      this.addForm.controls.content.value
    );
    console.log("add component new course: ",newCourse);
    this.courseService.addCourse(newCourse);
    this.router.navigate(['/listcourse']);
  }
}
