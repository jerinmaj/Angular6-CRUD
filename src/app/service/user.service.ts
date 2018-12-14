import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalProvider } from "../globalprovider";
import { Router } from "@angular/router";
import { LoginForm } from "../model/loginform";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  at = this.cookieService.get('accesstoken');
  constructor(public global: GlobalProvider, private http: HttpClient, private router: Router, private cookieService: CookieService) { }
  errors = {};

  create(user: User): void {
    console.log(user);

    console.log("Inside Create Function under UserService");
    //let body = JSON.stringify(user);   
    let body = user;
    console.log(body);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post(this.global.API_ENDPOINT + "/v1/register", body, httpOptions)
      .subscribe(
        (response) => {
          this.router.navigate(['login']);
        },
        (err) => {
          console.log(err);
          this.errors = err.error.errors;
        },
        () => {
          //Completed     
        }
      );

  }

  authorize(loginform: LoginForm) {
    console.log("inside autherization function under UserService");
    let body = loginform;
    let httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    };
    this.http.post(this.global.API_ENDPOINT + "/v1/authorize", body, httpOptions)
      .subscribe(
        (response: any) => {
          console.log(response);
          // console.log("Auth Code:"+response.data.authorization_code);
          //data
          this.accesstoken(response.data.authorization_code);

          // this.router.navigate(['login']);
        },
        (err) => {
          console.log(err);
          this.errors = err.error.errors;
        },
        () => {
          //Completed     
        }
      );

  }
  accesstoken(authtoken): void {
    console.log("Inside Accesstoken Function under UserService");
    let data = { "authorization_code": authtoken };

    let body = JSON.stringify(data);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.http.post(this.global.API_ENDPOINT + "/v1/accesstoken", body, httpOptions)
      .subscribe(
        (response: any) => {
          console.log(response);
          //data
          this.cookieService.set('accesstoken', response.data.access_token);
          if (this.cookieService.check('accesstoken')) { this.global.isGuest = false; }
          else { this.global.isGuest = true; }
          this.userinfo();

        },
        (err) => {


          console.log(err);
          //this.errors=err.error.errors;

        },
        () => {


        }
      );


  }
  userinfo(): void {
    console.log("Inside Userinfo(ME) Function under UserService");
    let at = this.cookieService.get('accesstoken');
    this.http.get(this.global.API_ENDPOINT + "/v1/me?access_token=" + at)
      .subscribe(
        (responce: any) => {
          console.log(responce);
          //  data
          this.cookieService.set('username', responce.data.username);
          this.global.username = this.cookieService.get('username');
          this.router.navigate(['users']);
        },
        (err) => {
          console.log(err);

        },
        () => {
          //completed
        }
      )
  }

  logout() {
    console.log("Inside logout Function under UserService");
    let at = this.cookieService.get('accesstoken');
    // console.log("token ="+this.at);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.global.API_ENDPOINT + "/v1/logout?access_token=" + at, httpOptions);

  }
}

