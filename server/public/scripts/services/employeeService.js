app.service('EmployeeService', ['$http', function($http){
    console.log('EmployeeService created')

    let self = this;
    self.employees = { list: [] };
    self.newEmployee = {};
    self.reportData = {};

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

    self.updateEmployee = function(employee){
      $http({
        method: 'PUT',
        url: `/employees/${employee._id}`,
        data: employee
      }).then(function(response){
        console.log('success in edit', response);
        self.getEmployees();
      }).catch(function(error){
        console.log('errir in edit', error);
      })
    }
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

    self.reportEmployees = function(){
      $http({
        method: 'GET',
        url: '/employees/report'
      }).then(function(response){
        console.log('success in reportGET', response);
        self.reportData.count = response.data;
      }).catch(function(error){
        console.log('error in reportGet', error);
      })

    }
//end reportEmployees count

self.reportEmployeesMax = function(){
  $http({
    method: 'GET',
    url: '/employees/report/max'
  }).then(function(response){
    console.log('success in reportGET', response);
    self.reportData.max = response.data;
  }).catch(function(error){
    console.log('error in reportGet', error);
  })

}
//end reportEmployeesmax count

self.reportEmployeesMin = function(){
  $http({
    method: 'GET',
    url: '/employees/report/min'
  }).then(function(response){
    console.log('success in reportGET', response);
    self.reportData.min = response.data;
  }).catch(function(error){
    console.log('error in reportGet', error);
  })

}
//end reportEmployeesMin count

self.reportEmployeesAverage = function(){
  $http({
    method: 'GET',
    url: '/employees/report/average'
  }).then(function(response){
    console.log('success in reportGET', response);
    console.log(response);
    self.reportData.average = response.data;
    console.log(self.reportData.average, 'average');
  }).catch(function(error){
    console.log('error in reportGet', error);
  })

}
//end reportEmployeesAverage count



}])//end app service
