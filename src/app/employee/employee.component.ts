import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees = EMPLOYEES;
  selectedEmployee: Employee;

  constructor() { }

  ngOnInit() {
  }

  onClickDetail(employee: Employee){
    this.selectedEmployee = employee;;
  }
}
