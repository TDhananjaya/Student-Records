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
import { Avgsub2Component } from './avgsub2/avgsub2.component';
import { Avgsub3Component } from './avgsub3/avgsub3.component';
import { RankComponent } from './rank/rank.component';
import { Ranks2Component } from './ranks2/ranks2.component';
import { Ranks3Component } from './ranks3/ranks3.component';

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
    AvarageComponent,
    Avgsub2Component,
    Avgsub3Component,
    RankComponent,
    Ranks2Component,
    Ranks3Component
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
      },
      {
        path: 'avg',
        component: AvarageComponent
      },
      {
        path: 'avgsub2',
        component: Avgsub2Component
      },
      {
        path: 'avgsub3',
        component: Avgsub3Component
      },
      {
        path: 'rank',
        component: RankComponent
      },
      {
        path: 'ranks2',
        component: Ranks2Component
      },
      {
        path: 'ranks3',
        component: Ranks3Component
      }

    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
