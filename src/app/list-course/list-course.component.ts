import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from '../course';
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
  );
  closeResult!: string;
  //@Input() course?: Course;
  constructor(private fb: FormBuilder, private courseService: CourseService, private modalService: NgbModal) { }

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
  search(name: any): void{
   this.filter= this.courses.filter(item => item.name.includes(name));
    this.isSearch = true;
    this.isList = false
  }
  searchByWord(): void{
    this.filter= this.courses.filter(item => item.name.includes(this.searching.controls.name.value)); 
    this.isSearch = true;
    this.isList = false
  }

  open(content:any, courseId:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'yes') {
        this.deleteCourse(courseId);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteCourse(id:any) {
    this.courses = this.courses.filter(x => x.id !== id);
  }
}
