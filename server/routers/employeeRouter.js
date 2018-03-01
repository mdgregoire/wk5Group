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

let testEmployee = new Employee(
  {
    name: 'Test Employee',
    salary: 20000,
    title: 'Job Title',
    hiredate: new Date('2018-02-01')
  }
);//end test employee build

testEmployee.save();

router.get('/', (request, response) => {
  Game.find({}, (error, foundGames) => {
    if (error){
      console.log('error on find games:', error);
      response.sendStatus(500);
    } else {
      response.send(foundGames);
    }
  })
});















// router.post('/', (request, response)=> {
//     let newEmployee = new Employee (request.body);
//     console.log('employee added');
//     newEmployee.save(( ) => {
//         if(error){
//             console.log('error in posting employee', error);
//             response.sendStatus(500);            
//         }else {
//             response.sendStatus(201);
//         }
//     })
    
// });

// router.get('/'), (request, response) => {

// }










module.exports = router;
