import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './views/main/register/register.component';
import {HomepageComponent} from './views/main/homepage/homepage.component';
import {LoginComponent} from './views/main/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
