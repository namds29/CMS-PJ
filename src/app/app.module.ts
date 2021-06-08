import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { AddCourseComponent } from './add-course/add-course.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexCourseComponent } from './index-course/index-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { LoginComponent } from './login/login.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';

@NgModule({
  declarations: [			
    AppComponent,
    LoginComponent,
    HomepageComponent,
    IndexCourseComponent,
    ListCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
      DetailCourseComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
