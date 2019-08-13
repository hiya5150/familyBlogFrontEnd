import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule,
  MatRadioModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/main/login/login.component';
import { RegisterComponent } from './views/main/register/register.component';
import { NotFoundComponent } from './views/main/not-found/not-found.component';
import { HomepageComponent } from './views/main/homepage/homepage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { VisitorsPostsComponent } from './views/visitors/posts/visitors-posts. component';
import { VisitorsHomepageComponent } from './views/visitors/visitors-homepage/visitors-homepage.component';
import { VisitorsNavComponent } from './views/visitors/visitors-nav/visitors-nav.component';
import { BloggersHomepageComponent } from './views/bloggers/bloggers-homepage/bloggers-homepage.component';
import { BloggersNavComponent } from './views/bloggers/bloggers-nav/bloggers-nav.component';
import {BloggersPostsComponent} from './views/bloggers/posts/bloggers-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomepageComponent,
    VisitorsPostsComponent,
    VisitorsHomepageComponent,
    VisitorsNavComponent,
    BloggersHomepageComponent,
    BloggersNavComponent,
    BloggersPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
