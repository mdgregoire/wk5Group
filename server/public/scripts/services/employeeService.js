app.service('EmployeeService', ['$http', function($http){
    console.log('EmployeeService created')

    let self = this;
    self.employees = { list: [] };
    self.newEmployee = {};

    self.getEmployees = function(){
      $http({
        method: 'GET',
        url: '/employees'
      }).then(function(response){
        console.log('success in get', response);
        self.employees.list = response.data;
      }).catch(function(error){
        console.log('error in get', error);
      })
    }
    // end getEmployees


    self.addEmployee = function(newEmployee){
      $http({
        method: 'POST',
        url: '/employees',
        data: newEmployee
      }).then(function(response){
        console.log('success in post', response);
        self.getEmployees();
      }).catch(function(error){
        console.log('error in post', error);
      })

    }
    // end addEmployee

    // self.updateEmployee = function(){
    //   $http({
    //     method: 'PUT',
    //     url: `/employees/${id}`,
    //     data:
    //   })
    // }
    // end updateEmployee

    self.deleteEmployee = function(id){
      $http({
        method: 'DELETE',
        url: `/employees/${id}`,
      }).then(function(response){
        console.log('success in delete', response);
        self.getEmployees();
      }).catch(function(error){
        console.log('error in delete', error);
      })

    }
    // end deleteEmployee

}])//end app service



{/* <input ng-model="newEmployee.name" type="text" placeholder="Name">
<input ng-model="newEmployee.id" type="number" placeholder="ID">
<input ng-model="newEmployee.salary" type="number" placeholder="Salary">
<input ng-model="newEmployee.title" type="text" placeholder="Title">
<br>
<label>Hire Date: <input ng-model="newEmployee.hireDate" type="date"></label> */}
