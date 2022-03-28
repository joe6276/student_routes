import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Student } from '../Interfaces/student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit {
student?:Student
  constructor(private route:ActivatedRoute,
      private studentService:StudentService
    ) { }

  ngOnInit(): void {
    const id = this.route.params.subscribe(
      (params:Params)=>{

        this.student= this.studentService.getStudent(+ params['id'])

      }
    )

  }

  updateStudent(name:string, email:string,phone:string){
    const id=this.route.snapshot.params['id']
    this.studentService.updateStudent(+id,name,email,phone)

  }

}
