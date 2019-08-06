import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomepageComponent
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
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
