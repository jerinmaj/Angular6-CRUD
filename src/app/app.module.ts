import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalProvider } from './globalprovider';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { UserService } from "./service/user.service";
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import{EmployeecrudService} from './service/employeecrud.service';
import { PaginatorComponent } from './paginator/paginator.component';


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
