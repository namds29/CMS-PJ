import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../service/course.service';
import { Student } from '../student';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent   implements OnInit,Student {
  courses: Course[] = [];
 
  
  constructor(private courseService: CourseService) {

  }
  talking(): void {
    console.log("talk st");
    
  }
  
  // add(a: number,b:number): number;
  // add(a: string, b: string): string;

  // add(a: any, b:any):any{
  //   return a+b;
  // }
  ngOnInit() {
    // this.add("alo","alo");
    // console.log(this.add("alo","alo"));
    // console.log("name: "+ this.student1.name + " age: " + this.student1.age);
    this.talking();

  }

  
}
