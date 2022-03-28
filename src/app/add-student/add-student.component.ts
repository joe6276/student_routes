import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService,
    private router:Router) { }

  ngOnInit(): void {
  }

  addStudent(name:string,email:string,phone:string){
      this.studentService.addStudent(name,email,phone)

      this.router.navigate(['students'])
  }

}
