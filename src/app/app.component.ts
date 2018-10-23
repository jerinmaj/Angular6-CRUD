import { Component } from '@angular/core';
import { GlobalProvider } from "./globalprovider";
import { Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { UserService } from "../../src/app/user.service";

@Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css']
          })

export class AppComponent
 {
    title = 'myapp1';
    constructor(public global: GlobalProvider,private cookieService: CookieService,private router:Router,private userService: UserService) 
    {   
         if(this.cookieService.check('accesstoken'))
         {
        this.global.isGuest=false;
        this.global.username=this.cookieService.get('username');
        console.log("Username:"+this.global.username);
         }
      else {
        this.global.isGuest=true;
       } 
     }

    logOut() { 
            //  this.cookieService.delete('username');
            //     this.cookieService.delete('accesstoken');
            //     this.global.isGuest=true;   
            //     this.router.navigate(['login']); 
            this.userService.logout()
            .subscribe(
              (responce :any)=>{
                this.cookieService.delete('username');
                this.cookieService.delete('accesstoken');
                this.global.isGuest=true;   
                this.router.navigate(['login']); 
               },
               (err :any)=>{
                 console.log(err);
               },
               ()=>{
                 //completed
               }
            );
          }
           
        
     }
