import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentResolver } from './Resolvers/studentResolver';
import { AuthGuard } from './Services/auth-guard-service';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'students', canActivate:[AuthGuard], 
  resolve:{students:StudentResolver}, component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
