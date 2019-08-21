import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './views/main/register/register.component';
import {HomepageComponent} from './views/main/homepage/homepage.component';
import {LoginComponent} from './views/main/login/login.component';
import {BloggersHomepageComponent} from './views/bloggers/bloggers-homepage/bloggers-homepage.component';
import {VisitorsHomepageComponent} from './views/visitors/visitors-homepage/visitors-homepage.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bloggers/home', component: BloggersHomepageComponent},
  {path: 'visitors/home', component: VisitorsHomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
