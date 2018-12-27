import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
 import { EmployeecrudService} from '../../service/employeecrud.service';
import { AddEmployee } from '../../model/addEmployee';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  errors={};
  employee : AddEmployee ={
          email :'',
          name: '',
     };

  constructor(private router:Router, private employeecrudService : EmployeecrudService) { }

  ngOnInit() {
  }

 goToView(employee :AddEmployee)
  {
    console.log("Inside gotToLogin function ");
    console.log(employee);
    this.employeecrudService._addEmployees(employee)
    .subscribe(
      (data : any) =>{
        let employeeid=data.data.id
        console.log(data);
        this.router.navigate(['users/view/'+employeeid]);
        },
      (err) => {
        console.log(err);
        this.errors=err.error.errors;
         },
      () =>{
        //completed
      }
    );
  }

}
