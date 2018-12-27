import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { DetailsViewComponent } from './components/details-view/details-view.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users/create', component: CreateFormComponent },
  { path: 'users/update/:id', component: UpdateFormComponent },
  { path: 'users/view/:id', component: DetailsViewComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
