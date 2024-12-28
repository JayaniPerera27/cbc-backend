/*import express from 'express';
import Student from '../models/student.js';

//create studentRouter
const studentRouter = express.Router();

studentRouter.get("/",(req,res)=>{

    console.log("This is a get request for student router")

    res.json({
        message: "This is a get request for student router"
    })
})

studentRouter.post("/",(req,res)=>{

    const Student = new Student(req.body)
    Student.save().then(()=>{
        res.json({
            message: "Student created"
        })
    }).catch(()=>{
        res.json({
            message:"Student not create"
        })
    })

    
})

export default studentRouter;*/

import express from 'express';
import Student from '../models/student.js';
import { getStudents , createStudent, deleteStudent} from '../controllers/studentController.js';

// Create studentRouter
const studentRouter = express.Router();

studentRouter.get("/", getStudents)

studentRouter.post("/", createStudent)

studentRouter.delete("/",deleteStudent)

export default studentRouter;
