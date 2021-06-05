import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexCourseComponent } from './index-course/index-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    HomepageComponent,
    IndexCourseComponent,
    ListCourseComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
