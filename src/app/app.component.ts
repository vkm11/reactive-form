import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'reactive-form';
  registrationForm = new FormGroup({
    userName: new FormControl('Vijay'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
  loadApiData(){
    this.registrationForm.setValue({
      userName:'kumar',
      password:'test',
      confirmPassword:'test',
      address:{
        city: 'City',
        state:'State',
        postalCode:'123456'
      }
    });
  }
}

