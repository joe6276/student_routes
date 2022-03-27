import { Injectable } from "@angular/core";
import {Resolve} from "@angular/router";
import { Student } from "../Interfaces/student";
import { StudentService } from "../Services/student.service";


@Injectable()
export class StudentResolver implements Resolve<Student[]>{
   
   constructor(private studentservice:StudentService){}
    resolve():Student[] {
       return this.studentservice.getStudents();
        
    }
}