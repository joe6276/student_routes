
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
            id:1,
            name:'Felix',
            email:'felix@juma.com',
            phone:'+254712584549'

        }

    ]

        getStudents(){
            return this.students
        }
}