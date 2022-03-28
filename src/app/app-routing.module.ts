import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { HomeComponent } from './home/home.component';
import { StudentResolver } from './Resolvers/studentResolver';
import { AuthGuard } from './Services/auth-guard-service';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'students', canActivate:[AuthGuard], 
  resolve:{students:StudentResolver}, component:StudentsComponent,children:[
    {path:':id', component:StudentComponent},
    {path:':id/edit', component:EditStudentsComponent}
  ]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
