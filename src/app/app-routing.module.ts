import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './views/register/register.component';
import {HomepageComponent} from './views/homepage/homepage.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
