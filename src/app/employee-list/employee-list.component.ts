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
    email = email.trim();
    if (!name || !email) { return; }
    this.empService.addEmployee({ name, email } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    this.empService.deleteEmployee(employee).subscribe();
  }

  onClickDetail(employee: Employee){
    this.selectedEmployee = employee;;
  }
}