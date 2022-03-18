import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-scholarship-form',
  templateUrl: './scholarship-form.component.html',
  styleUrls: ['./scholarship-form.component.css']
})
export class ScholarshipFormComponent implements OnInit {
  scholarshipForm: FormGroup ;

  constructor(private formBuilder: FormBuilder) { 
    this.registerForm = formBuilder.group({
      AadharNumber : ['', [Validators.required, Validators.maxLength(15)]],
      Community/Catagory : [' ', [Validators.required]],
      FatherName : ['', [Validators.required, ]],
      FamilyAnnualIncome : ['', [Validators.required]],
      Religion : ['', [Validators.required]],
      MotherName : ['', Validators.required],
      InstituteName : ['', [Validators.required]],
      PresentClass : ['', [Validators.required]],
      ClassStartDate : ['', [Validators.required]],
      PreviousClass : ['', [Validators.required]],
      Course : ['', [Validators.required]],
      ModeofStudy : ['', Validators.required]],
      University/BoardName : ['', [Validators.required]],
      PreviousPassingYear : ['', [Validators.required, Validators.maxLength(4)]],
      PreviousClass : ['', [Validators.required]],
      RollNumber : ['', [Validators.required]],
      PassingYear : ['', [Validators.required]],
      BoardName : ['', [Validators.required]],
      PercentageObtained : ['', [Validators.required]],
      AdmissionFee : ['', [Validators.required]],
      TuitionFee : ['', [Validators.required]],
      OtherFee : ['', [Validators.required]],
      IsDisabled : ['', [Validators.required]],
      PercentageOfDisablity : ['', [Validators.required]],
      ParentsProfession : ['', [Validators.required]],
      TypeOfDisabled: ['', [Validators.required]],
      MaritalStatus : ['', [Validators.required]],
      
      }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
)
    })
  }

  ngOnInit() {
    
  }

  onsubmit() {
    console.log(this.scholarshipForm.value)
  }

}