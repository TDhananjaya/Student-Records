import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddMarksComponent } from './add-marks/add-marks.component';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddStudentComponent,
    AddMarksComponent
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
      }

    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
