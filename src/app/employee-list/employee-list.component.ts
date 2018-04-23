import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  show: boolean = false;
  selectedEmployee: Employee;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
   this.empService.getEmployees()
       .subscribe(employees => {this.employees = employees;
        this.show = true});
  }

  addEmployee(name: string, email: string): void {
    name = name.trim();
    if (!name) { return; }
    this.empService.addEmployee({ name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
    email = email.trim();
    if (!email) { return; }
    this.empService.addEmployee({ email } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  onClickDetail(employee: Employee){
    this.selectedEmployee = employee;;
  }
}