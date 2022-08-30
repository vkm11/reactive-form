# Simple Reactive Form

## app.component.html

<h1>{{title}}</h1>
<form [formGroup]="loginForm" (ngSubmit)="loginUser()">
  <label style="margin:10px;">
    <input type="text" placeholder="Enter Name" name="user" formControlName="user" >
  </label>
  <label style="margin:10px;">
    <input type="text" placeholder="Enter Password" name="password" formControlName="password" >
  </label>
  <button>Login</button>
</form>

## app.component.ts

import { Component } from '@angular/core';
import {FormControl, FormControlName, FormGroup,} from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-reactive_form';
  loginForm= new FormGroup({
    user:new FormControl("vijay"),
    password:new FormControl("123")
  })
  loginUser(){
    console.log(this.loginForm.value);
  }
}

## app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
