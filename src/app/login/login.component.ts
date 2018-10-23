import { Component, OnInit,Input } from '@angular/core';

import { UserService } from "../user.service";

import { Router} from "@angular/router";

import { GlobalProvider } from "./../globalprovider";
import { LoginForm } from '../loginform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    

loginform: LoginForm  = {
  username: '',
  password: '',
};

  // constructor(private router:Router,public global: GlobalProvider,private userService: UserService) { 
  //   this.global.isGuest=true;
  //   this.global.currentPage="login";
  // }

  constructor(public global: GlobalProvider,private userService: UserService,private router:Router) {    
    if(!this.global.isGuest){
    this.router.navigate(['users']);
     }
  //this.global.isGuest=true;
  this.global.currentPage='login';  }





  ngOnInit() {
  }

    login(loginform:LoginForm ): void 
       {    console.log("Inside Login Function");
         console.log(loginform);
        this.userService.authorize(loginform);
        

         }
}
