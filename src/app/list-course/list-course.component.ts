import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  filter: any;
  popup = document.getElementById("popupDetail");
  isSearch = false;
  isList = true;
  searching = this.fb.group(
    {
      name: ['']
    }
  )
  //@Input() course?: Course;
  constructor(private fb: FormBuilder, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
   
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
  search(name: any): void{
   this.filter= this.courses.filter(item => item.name.includes(name));
    console.log(this.courses.filter(item => item.name.includes(name)));
    this.isSearch = true;
    this.isList = false
  }
  searchByWord(): void{
    this.filter= this.courses.filter(item => item.name.includes(this.searching.controls.name.value)); 
    this.isSearch = true;
    this.isList = false
  }
}
