import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:Student[]=[]
  constructor(private route:ActivatedRoute,
    
    private router:Router) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (data)=>{
        this.students= data['students']

      }
    )
    console.log(this.students)
  }

  addStudent(){
    this.router.navigate(['register'])
  }

}
