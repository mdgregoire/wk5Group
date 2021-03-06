const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    id: {type: Number, required: true},
    salary: {type: Number},
    title: {type: String, required: true},
    editing: {type: Boolean, default: false},
    hiredate: {type: Date, required: true}
  }
);//end employee schema

const Employee = mongoose.model('Employee', EmployeeSchema, 'employees');

router.get('/', (request, response) => {
  Employee.find({}, (error, foundEmployees) => {
    if (error){
      console.log('error on find employees:', error);
      response.sendStatus(500);
    } else {
      response.send(foundEmployees);
    }
  })
});

router.post('/', (request, response)=> {
    let newEmployee = new Employee (request.body);
    console.log('employee added', newEmployee);
    newEmployee.save((error, addedEmployee ) => {
        if(error){
            console.log('error in posting employee', error);
            response.sendStatus(500);
        }else {
            response.sendStatus(201);
        }
    })
});

router.put('/:id', (request, response)=> {
    let id = request.params.id;
    let employeeToUpdate = request.body;
    console.log('employeeToUpdate', employeeToUpdate);
    Employee.findByIdAndUpdate(
        {"_id": id},
        {$set: employeeToUpdate},
        (error, updateEmployee) =>{
            if(error){
                console.log('error on update employee', error );
                response.sendStatus(500);
            } else {
                response.sendStatus(200);
            }
        }
    )
})

router.delete('/:id', (request, response) => {
    let id = request.params.id;
    Employee.findByIdAndRemove(
        {"_id": id},
        (error , deletedEmployee) => {
            if (error){
                console.log('error in delete');
                response.sendStatus(500);
            }else{
                response.sendStatus(200);
            }
        }
    )
})

router.get('/report', (request, response) => {
  Employee.aggregate(
  [
    {
      $count: "number"
    }
  ],
(error, report) => {
  if (error){
    console.log('error in report', error);
    response.sendStatus(500);
  }else{
    console.log(report);
    response.send(report);
  }
})
})

router.get('/report/min', (request, response) => {
    Employee.aggregate([
   {
     $group: {
       _id: null,
       min: {
         $min: "$salary"
       }
     }
   }
 ],
(error, report) => {
  if (error){
    console.log('error in report', error);
    response.sendStatus(500);
  }else{
    console.log(report);
    response.send(report);
  }
})
})

router.get('/report/max', (request, response) => {
  Employee.aggregate([
 {
   $group: {
     _id: null,
     max: {
       $max: "$salary"
     }
   }
 }
],
(error, report) => {
  if (error){
    console.log('error in report', error);
    response.sendStatus(500);
  }else{
    console.log(report);
    response.send(report);
  }
})
})

router.get('/report/average', (request, response) => {
  Employee.aggregate([
    {
      $group: {
        _id: null,
        average: {
          $avg: "$salary"
        }
      }
    }
  ],
(error, report) => {
  if (error){
    console.log('error in report', error);
    response.sendStatus(500);
  }else{
    console.log(report);
    response.send(report);
  }
})
})



module.exports = router;
