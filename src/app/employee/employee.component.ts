import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  }
  constructor() { }

  ngOnInit() {
  }

}
