const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    salary: {type: Number},
    title: {type: String, required: true},
    hiredate: {type: Date, required: true}
  }
);//end employee schema

const Employee = mongoose.model('Employee', EmployeeSchema, 'employees');

// let testEmployee = new Employee(
//   {
//     name: 'Test Employee',
//     salary: 20000,
//     title: 'Job Title',
//     hiredate: new Date('2018-02-01')
//   }
// );//end test employee build

// testEmployee.save();

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




module.exports = router;
