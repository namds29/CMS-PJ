import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  course: any;

  editForm = this.fb.group({
    id: [null, Validators.required],
    name: [null, Validators.required],
    startDate: [null, Validators.required],
    lecturer: [null, Validators.required],
    classId: [null, Validators.required],
    content: [null, Validators.required]
  });

  //editedCourse!: Course;
  // id = parseInt(this.route.snapshot.paramMap.get('id')!);
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.getCourseDetail(id);
  }

  editCourse(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log("selected id ", id);
    let editedCourse = new Course(
                                    id,
                                    this.editForm.controls.name.value,
                                    this.editForm.controls.startDate.value,
                                    this.editForm.controls.lecturer.value,
                                    this.editForm.controls.classId.value,
                                    this.editForm.controls.content.value
    );
    console.log("editcomponent"+" ",editedCourse);
    this.courseService.editCourse(editedCourse);
    this.router.navigate(['/listcourse']);
  }
}
