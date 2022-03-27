import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:Student[]=[]
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (data)=>{
        this.students= data['students']

      }
    )
    console.log(this.students)
  }

}
