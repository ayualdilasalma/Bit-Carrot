import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
  return of(EMPLOYEES);
  }

  getEmployeesById(id: number): Observable<Employee> {
    return of(EMPLOYEES.find(employee => employee.id === id));
  }
  

}
