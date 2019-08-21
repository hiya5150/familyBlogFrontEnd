import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './views/main/register/register.component';
import {HomepageComponent} from './views/main/homepage/homepage.component';
import {LoginComponent} from './views/main/login/login.component';
import {BloggersHomepageComponent} from './views/bloggers/bloggers-homepage/bloggers-homepage.component';
import {VisitorsHomepageComponent} from './views/visitors/visitors-homepage/visitors-homepage.component';
import {BloggerAuthGuard} from './controllers/blogger-auth.guard';
import {VisitorAuthGuard} from './controllers/visitor-auth.guard';
import {BloggersPostsComponent} from './views/bloggers/posts/bloggers-posts.component';
import {VisitorsPostsComponent} from './views/visitors/posts/visitors-posts. component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bloggers/home', component: BloggersHomepageComponent, canActivate: [BloggerAuthGuard]},
  {path: 'visitors/home', component: VisitorsHomepageComponent, canActivate: [VisitorAuthGuard]},
  {path: 'bloggers/posts', component: BloggersPostsComponent, canActivate: [BloggerAuthGuard]},
  {path: 'visitors/posts', component: VisitorsPostsComponent, canActivate: [VisitorAuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
