import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from './employee';
//import { EMPLOYEES } from './mock-employees';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {
  private employeesUrl = 'http://localhost:3000/api/employees';
  constructor(
  private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        //tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET employee by id */
  getEmployeesById(_id: string): Observable<Employee> {
    const url = `${this.employeesUrl}/${_id}`;
    return this.http.get<Employee>(url).pipe(
      //tap(_ => this.log(`fetched employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${_id}`))
    );
  }

  /** ADD: add the employee to the server */
  addEmployee (employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.employeesUrl}/add`, employee, httpOptions).pipe(
      //tap((employee: Employee) => this.log(`added employee w/ id=${employee._id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }
  
  /** DELETE: delete the hero from the server */
  deleteEmployee (employee: Employee | string): Observable<Employee> {
    const _id = typeof employee === 'string' ? employee : employee._id;
    const url = `${this.employeesUrl}/${_id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      //tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
