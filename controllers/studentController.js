import Student from "../models/student.js";

export function getStudents(req, res){
    Student.find().then(
     (studentList)=> {[
         res.json({
             list: studentList
         })
     ]}
    )
 }

 export function createStudent(req, res) {
    // No need to redeclare 'Student' again, just create a new instance
    const student = new Student(req.body);  // Create a new instance of the Student model

    student.save()
        .then(() => {
            res.json({
                message: "Student created"
            });
        })
        .catch(() => {
            res.json({
                message: "Student not created"
            });
        });
} 

export function deleteStudent(req,res){
    Student.deleteOne({name:req.body.name}).then(
        ()=>{
            res.json(
                {
                    message : "Student deleted successfully"
                }
            )
        }
    )
}