import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }  from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateFormComponent } from './create-form/create-form.component';
import{ UpdateFormComponent } from './update-form/update-form.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
                          { path: 'users', component: UsersComponent },
                          { path: '', component: LoginComponent },
                          { path: 'login',component:LoginComponent},
                          { path:'signup',component:SignupComponent},
                          { path:'users/create', component:CreateFormComponent},
                          { path: 'users/update/:id',component:UpdateFormComponent},
                          { path:'users/view/:id',component:DetailsViewComponent}

                        ];

@NgModule({

          imports: [ RouterModule.forRoot(routes) ],
          exports: [ RouterModule ],
          declarations: []
       })
export class AppRoutingModule { }
