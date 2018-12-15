import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from "@angular/router";
import { EmployeecrudService} from '../service/employeecrud.service';
import { GlobalProvider } from "../globalprovider";
import { Employee_M } from '../model/employee';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  errors={};
  employee : Employee_M = {
    id:0,
    name: '',
    email: '',
      };
      public employeeId;
  constructor(public global: GlobalProvider, private activatedRoute: ActivatedRoute,private router:Router, private empoyeeCrudService : EmployeecrudService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.employeeId  = paramsId.id;

      console.log( "Employee id ="+this.employeeId); // Print the parameter to the console. 
  });

     this.empoyeeCrudService._viewEmployee(this.employeeId)
          .subscribe( (data: any) => {
            //data  
           this.employee = data.data;
            });
          }
 
    updateEmployee(employee :Employee_M ){  
       console.log("Inside updateEmployee function ");
       this.empoyeeCrudService._updateEmployee(employee)
            .subscribe((response)=>{
                     console.log(response);
       this.router.navigate(['users/view']);
                       },
                       (err) => {
                       console.log(err);
                this.errors=err.error.errors;
                     },
                 () =>{
                      //completed
                    });
         }
      delete(employee :Employee_M){
        console.log("inside delete function");
        this.empoyeeCrudService._deleteEmployee(employee.id)
         .subscribe( (data :any)=>{
        console.log( data );
        this.router.navigate(['users']); 
    }
    );
      }

}
