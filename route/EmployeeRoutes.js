const express=require('express')
const router=express.Router();
const employeeController=require('../controller/EmployeeController')
const Employee=require('../model/employee')


router.post('/add-emp',employeeController.createEmployee);
router.put('/add-emp',employeeController.createEmployee);
router.delete('/add-emp',employeeController.createEmployee);
router.get('/add-emp',employeeController.createEmployee);
module.exports=router;