import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from "../../globalprovider";
import { Router} from "@angular/router";
import { EmployeecrudService} from '../../service/employeecrud.service';
import { Employee_M } from '../../model/employee';
import{ EmployeeSearch } from '../../model/employeeSearch';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
   employees: Employee_M []=[];
   employeesearch:EmployeeSearch={
     id:'',
    name: '',
    email: ''
  };
  total:number;
  //total=50;
   page_c=0;
   page=1;
   order='id'
   limit=10;
   pages=[];
   idflag=1;
   nameflag=0;
   emailflag=0;
   search='';
  constructor(public global: GlobalProvider,private router:Router, private empoyeeCrudService : EmployeecrudService) {
    this.global.currentPage='users';    
    if(this.global.isGuest){
      this.router.navigate(['login']);
    } 
   }


  ngOnInit() {

    this.listEmployees(this.search,this.page,this.order);
    console.log("onInitial page="+this.page);
  }
  
  Click(i) {
    console.log("hii");
   // console.log(event);
    // var target = event.target || event.srcElement || event.currentTarget;
    // var idAttr = target.attributes.id;
    // var value = idAttr.nodeValue;
    this.page= i+1;
    console.log("after click page="+this.page);
    this.listEmployees(this.search,this.page,this.order);

    
   
  }
  listEmployees(search='',page=1, order="id"){
    console.log("1st page="+page);
    console.log("search "+search+" page"+page+"order "+order);
  this.empoyeeCrudService._listEmployees(search,page,order).subscribe( (data :any) => {
    this.employees = data.data.data;

    this.total = data.data.totalCount;
    console.log(this.total);
    this.page_c =Math.ceil(this.total/ this.limit);
     console.log(this.page_c);
    this.pages=[];
     for(let i=1;i<= this.page_c;i++)
     {
           this.pages.push(i);
     }
     console.log(this.pages);
     console.log(this.employees);
   }); 
  }
  view(employee:Employee_M){
    //let employeeId=employee.id
    this.router.navigate(['users/view/'+employee.id]);
  }
  update(employee:Employee_M){
    
    this.router.navigate(['users/update/'+employee.id]);
  }

  delete(employee :Employee_M){
    console.log("inside delete function");
    this.empoyeeCrudService._deleteEmployee(employee.id)
    .subscribe(
      (data :any)=>{
        console.log( data );
        this.listEmployees();
       // this.router.navigate(['users']); 
       // this. employees = this. employees.filter(u => u !==employee);
      }, 
      (err :any)=>{
        console.log( err );
      }
    );
  }

  _sortEmployeeslist(sortby='')
 {     
   console.log(sortby);
	 if(sortby=='id')
	 {
	   if(this.idflag==0)
	   {
      this.listEmployees(this.search,this.page,'id asc');
        this.idflag=1;
	   }
	   else{
		this.listEmployees(this.search,this.page,'id desc');
		this.idflag=0;
	   }
	 }
	 if(sortby=='name')
	 {
		if(this.nameflag==0)
	   {
        this.listEmployees(this.search,this.page,'name asc');
		this.nameflag=1;
	   }
	   else{
	 this.listEmployees(this.search,this.page,'name desc');
		this.nameflag=0;
	   }
	 }
	 if(sortby=='email')
	 {
		if(this.emailflag==0)
	   {
        this.listEmployees(this.search,this.page,'email asc');
		this.emailflag=1;
	   }
	   else{
		this.listEmployees(this.search,this.page,'email desc');
		this.emailflag=0;
	   }
	 }
 }




_search(employeesearch:EmployeeSearch) {
   this.search='';
   console.log("In the Search" +employeesearch);
   console.log(employeesearch);
  if(employeesearch.id!=='')
    {
      this.search+="&search[id]="+employeesearch.id;
      console.log("employeesearch.id ="+employeesearch.id);
    }
    if(employeesearch.name!=='')
    {
      this.search+="&search[name]="+employeesearch.name;


      console.log("employeesearch.name ="+employeesearch.name);
    }
    if(employeesearch.email!=='')
    {
      this.search+="&search[email]="+employeesearch.email;
      console.log("employeesearch.email ="+employeesearch.email);
    }
    console.log(this.search);
    this.listEmployees(this.search);
 }
}
