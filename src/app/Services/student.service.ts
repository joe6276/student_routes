import { Student } from "../Interfaces/student";


export class StudentService{

    students:Student[]=[
        {
            id:1,
            name:'Jonathan',
            email:'joe@ndambuki.com',
            phone:'+254712584549'

        }
        ,
        {
            id:2,
            name:'Samuel',
            email:'joe@dorcis.com',
            phone:'+254712584549'

        }
        ,
        {
            id:3,
            name:'Felix',
            email:'felix@juma.com',
            phone:'+254712584549'

        }

    ]

        getStudents(){
            return this.students
        }

        getStudent(id:number){
            const student = this.students.find(
                (s) => {
                  return s.id === id;
                }
              );
              return student
        }

        updateStudent(id:number, newname:string, newemail:string ,newPhone:string){
            const student = this.students.find(
                (s) => {
                  return s.id === id;
                }
              );
              if(student){
                student.email=newemail
                student.name=newname
                student.phone=newPhone
            }
           
            }
             
}