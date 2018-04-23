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
  selectedEmployee: Employee;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
   this.empService.getEmployees()
       .subscribe(employees => this.employees = employees);
  }

  onClickDetail(employee: Employee){
    this.selectedEmployee = employee;;
  }
}
