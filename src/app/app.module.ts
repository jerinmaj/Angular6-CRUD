import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalProvider } from './globalprovider';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { DetailsViewComponent } from './components/details-view/details-view.component';
import { UserService } from "./service/user.service";
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import{EmployeecrudService} from './service/employeecrud.service';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
              declarations: [
                              AppComponent,
                              UsersComponent,
                              LoginComponent,
                              SignupComponent,
                              CreateFormComponent,
                              UpdateFormComponent,
                              DetailsViewComponent,
                              PaginatorComponent
                           ],
               imports: [
                          BrowserModule,
                          AppRoutingModule,
                          FormsModule,
                          HttpClientModule,
                          ReactiveFormsModule,
                         ],
                         providers: [
                          GlobalProvider,
                          UserService,
                          CookieService,
                          EmployeecrudService
                        ],
              bootstrap: [
                           AppComponent
                         ]
           })
export class AppModule { }
