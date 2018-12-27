import { Component, OnInit,Input } from '@angular/core';

import { UserService } from "../../service/user.service";

import { Router} from "@angular/router";

import { GlobalProvider } from "../../globalprovider";
import { User } from '../../model/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  user: User = {
    username: '',
    email: '',
    password: ''
};

constructor(public global: GlobalProvider,private us: UserService,private router:Router)
 {
    this.global.currentPage='signup';     
  if(!this.global.isGuest){
  this.router.navigate(['users']);
}  }

  ngOnInit() {
             }

  createUser(user:User): void 
    {        
      console.log("Inside Create User Function");      
      console.log(user);  
      this.us.create(user);  
    }

}
