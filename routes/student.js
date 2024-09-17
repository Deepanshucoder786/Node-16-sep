const express=require('express')
const router=express.Router();
const StudentController= require("../controllers/studentcontroller")
router.post('/add/user', (req,res)=>{
    StudentController.addStudent(req,res);
})
router.get('/users',(req,res)=>{
    StudentController.getStudents(req,res)
})
router.get('/users/:rollNo',(req,res)=>{
    StudentController.getStudentsbyrollno(req,res)
})
module.exports=router;