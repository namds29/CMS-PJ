import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  course: any;

  editForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
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
    console.log(this.course.name);
  
  }

  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.getCourseDetail(id);
   
    this.editForm.controls.name.setValue(this.course.name);
    this.editForm.controls.startDate.setValue(this.course.startDate);
    this.editForm.controls.lecturer.setValue(this.course.lecturer);
    this.editForm.controls.classId.setValue(this.course.classId);
    this.editForm.controls.content.setValue(this.course.content);
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
    // this.editForm.controls.name.setValue(this.course.name);
    
    // console.log(this.course);
   console.log( this.courseService.editCourse(editedCourse));
    this.courseService.editCourse(editedCourse);
    // console.log(this.course);

    
    this.router.navigate(['/listcourse']);
  }
}
