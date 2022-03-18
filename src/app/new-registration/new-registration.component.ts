
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { 
    this.registerForm = formBuilder.group({
    firstName : ['', [Validators.required]],
    district: ['', [Validators.required]],
    domicile: ['', [Validators.required]],
    mobile: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    instituteCode: ['', [Validators.required]],
    aadharNumber: ['', [Validators.required, Validators.maxLength(12)]],
    ifscCode: ['', [Validators.required]],
    accountNumber: ['', [Validators.required]],
    bankName: ['', [Validators.required]],
    setPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    agree: ['false', [Validators.required]],
    gender: ['', [Validators.required]],
    dob: ['', [Validators.required]],  
    });
    
  }

  ngOnInit() {
  
  }

  onSubmit() {
  // TODO: Use EventEmitter with form value
    console.log(this.registerForm.value);
    this.reset();
  }
  
  reset() {
    this.registerForm.reset();
  }

}


