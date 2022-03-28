import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsComponent } from './students/students.component';
import { AuthService } from './Services/auth-service';
import { AuthGuard } from './Services/auth-guard-service';
import { HomeComponent } from './home/home.component';
import { StudentService } from './Services/student.service';
import { StudentResolver } from './Resolvers/studentResolver';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentsComponent,
    HomeComponent,
    EditStudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard,StudentService,StudentResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
