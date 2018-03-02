const employeeController = app.controller('EmployeeController', ['EmployeeService', function(EmployeeService){
    let self = this;

    self.employees = EmployeeService.employees;

    self.newEmployee = EmployeeService.newEmployee;

    self.getEmployees = EmployeeService.getEmployees;
    self.getEmployees();

    self.addEmployee = EmployeeService.addEmployee;

    self.updateEmployee = EmployeeService.updateEmployee;

    self.deleteEmployee = EmployeeService.deleteEmployee;
    self.reportEmployees = EmployeeService.reportEmployees;
    self.reportEmployeesMin = EmployeeService.reportEmployeesMin;
    self.reportEmployeesMax = EmployeeService.reportEmployeesMax;
    self.reportEmployeesAverage = EmployeeService.reportEmployeesAverage;
    self.runReports = EmployeeService.runReports;
    self.runReports();



    self.reportData = EmployeeService.reportData;
}])//end employeeController



//
// <input ng-model="newEmployee.name" type="text" placeholder="Name">
// <input ng-model="newEmployee.id" type="number" placeholder="ID">
// <input ng-model="newEmployee.salary" type="number" placeholder="Salary">
// <input ng-model="newEmployee.title" type="text" placeholder="Title">
// <br>
// <label>Hire Date: <input ng-model="newEmployee.hireDate" type="date"></label>
