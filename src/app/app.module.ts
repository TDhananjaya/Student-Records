import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddMarksComponent } from './add-marks/add-marks.component';

import { Semester2Component } from './semester2/semester2.component';
import { Semester3Component } from './semester3/semester3.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AvarageComponent } from './avarage/avarage.component';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddStudentComponent,
    AddMarksComponent,
    Semester2Component,
    Semester3Component,
    StatisticsComponent,
    AvarageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'Addstd',
        component: AddStudentComponent
      },
      {
        path: 'addmarks',
        component: AddMarksComponent
      },
      {
        path: 'sem2',
        component: Semester2Component
      },
      {
        path: 'sem3',
        component: Semester3Component
      },
      {
        path: 'stat',
        component: StatisticsComponent
      }

    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
