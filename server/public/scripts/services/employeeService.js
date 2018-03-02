app.service('EmployeeService', ['$http', function($http){
    console.log('EmployeeService created')

    let self = this;
    self.employees = { list: [] };
    self.newEmployee = {};

    self.getEmployees = function(){

    } // end getEmployees

    self.addEmployee = function(){

    } // end addEmployee

    self.updateEmployee = function(){

    } // end updateEmployee

    self.deleteEmployee = function(){
        
    } // end deleteEmployee

}])//end app service
