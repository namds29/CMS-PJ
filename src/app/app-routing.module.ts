import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexCourseComponent } from './index-course/index-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { LoginComponent } from './login/login.component';

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
  },
  {
    path: 'update/:id',
    component: EditCourseComponent
  },
  
    {
      path: 'course-detail/:id',
      component: DetailCourseComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
