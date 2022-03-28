import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from '../Interfaces/student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
student?:Student
  constructor(private studentService:StudentService,
              private route:ActivatedRoute,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{

        this.student=this.studentService.getStudent(+params['id'])
      }
    )
    
  }
  editStudents(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  
    
  }
  deleteStudents(){
    this.route.params.subscribe(
    (params:Params)=>{
      const id =+ params['id']
      this.studentService.deleteStudent(id)
    }
    )
    this.router.navigate(['students'])
    
  }

}
