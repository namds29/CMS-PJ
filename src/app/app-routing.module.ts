import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexCourseComponent } from './index-course/index-course.component';
import { LoginComponent } from './login/login.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'index',
    component: IndexCourseComponent
  },
  {
    path: 'listcourse',
    component: ListCourseComponent
  },
  {
    path: 'addcourse',
    component: AddCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
