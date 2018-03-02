const employeeController = app.controller('EmployeeController', ['EmployeeService', function(EmployeeService){
    let self = this;
    
    self.employees = EmployeeService.employees;

    self.newEmployee = EmployeeService.newEmployee;

    self.getEmployees = EmployeeService.getEmployee

    self.addEmployee = EmployeeService.addEmployee

    self.updateEmployee = EmployeeService.updateEmployee

    self.deleteEmployee = EmployeeService.deleteEmployee

}])//end employeeController
