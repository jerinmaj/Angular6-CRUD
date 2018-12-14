import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from "./../globalprovider";
import { Router,ActivatedRoute} from "@angular/router";
import { EmployeecrudService} from '../service/employeecrud.service';
import { Employee_M } from '../model/employee';


@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
  
 // employee :Employee_M;
 employee : Employee_M = {
  id:0,
  name: '',
  email: '',
    };
    public employeeId;
  constructor(public global: GlobalProvider,private router:Router, private activatedRoute: ActivatedRoute, private empoyeeCrudService : EmployeecrudService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.employeeId  = paramsId.id;

      console.log( "Employee id ="+this.employeeId); // Print the parameter to the console. 
  });


    this.empoyeeCrudService._viewEmployee(this.employeeId).
         subscribe(
              (data :any)=>{
                // data
               this.employee = data.data;
                  }
                  );
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

    update(employee:Employee_M){
      this.router.navigate(['users/update/'+employee.id]);
    }

  
}
