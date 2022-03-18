import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstituteRequestFormComponent } from './institute-request-form/institute-request-form.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { ScholarshipFormComponent } from './scholarship-form/scholarship-form.component';
import { ScholarshipFormUploadComponent } from './scholarship-form-upload/scholarship-form-upload.component';
import { StudentApplicationVerificationComponent } from './student-application-verification/student-application-verification.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { UsersLoginComponent } from './users-login/users-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstituteRequestFormComponent,
    NewRegistrationComponent,
    RegistrationSuccessComponent,
    ScholarshipFormComponent,
    ScholarshipFormUploadComponent,
    StudentApplicationVerificationComponent,
    StudentHomeComponent,
    StudentLoginComponent,
    UsersLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
