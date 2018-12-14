import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalProvider } from '../globalprovider';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { AddEmployee } from '../model/addEmployee';
import { Employee_M } from '../model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeecrudService {

  constructor(private http: HttpClient, public global: GlobalProvider, private router: Router, private cookieService: CookieService) { }

  // errors={};
  _listEmployees(search: string, page: number, order: string) {
    console.log("Inside listEmployees" + "search = " + search + "page =" + page);
    let at = this.cookieService.get('accesstoken');
    return this.http.get(this.global.API_ENDPOINT + "v1/employees?access_token=" + at + "&page=" + page + "&order=" + order + search);
  }

  _addEmployees(employee: AddEmployee) {
    console.log("Inside addEmployees Function under employeeCrudeService");
    let body = employee;
    let at = this.cookieService.get('accesstoken');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Access-Token': at
      })
    };
    return this.http.post(this.global.API_ENDPOINT + '/v1/employees', body, httpOptions);
  }

  _viewEmployee(id: number) {
    console.log("Inside viewEmployee Function under employeeCrudeService");
    let at = this.cookieService.get('accesstoken');
    let httpOptions = {
      headers: new HttpHeaders({
        'X-Access-Token': at
      })
    };
    return this.http.get(this.global.API_ENDPOINT + "v1/employees/" + id, httpOptions);
  }

  _updateEmployee(employee1: Employee_M) {
    console.log("Inside updateEmployee Function under employeeCrudeService");
    console.log(employee1);
    let at = this.cookieService.get('accesstoken');
    let id = employee1.id;
    let body =
    {
      email: employee1.email,
      name: employee1.name
    };
    let httpOptions = {
      headers: new HttpHeaders({
        'X-Access-Token': at
      })
    };
    console.log(httpOptions);
    return this.http.put(this.global.API_ENDPOINT + "/v1/employees/" + id, body, httpOptions);
  }

  _deleteEmployee(id: number) {
    console.log("Inside deleteEmployee Function under employeeCrudeService");
    let at = this.cookieService.get('accesstoken');
    let httpOptions = {
      headers: new HttpHeaders({
        'X-Access-Token': at
      })
    };
    return this.http.delete(this.global.API_ENDPOINT + "v1/employees/" + id, httpOptions);
  }




}
