
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { InstituteRequestFormComponent } from './components/institute-request-form/institute-request-form.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { ScholarshipFormUploadComponent } from './components/scholarship-form-upload/scholarship-form-upload.component';
import { ScholarshipFormComponent } from './components/scholarship-form/scholarship-form.component';
import { StudentApplicationVerificationComponent } from './components/student-application-verification/student-application-verification.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { UsersLoginComponent } from './components/users-login/users-login.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'contact-us', component: ContactUsComponent },
{ path: 'register', component: NewRegistrationComponent },
{ path: 'users-login', component: UsersLoginComponent },
{ path: 'register-sucsess', component: RegistrationSuccessComponent },
{ path: 'student-home', component: StudentHomeComponent },
{ path: 'scholarship-form', component: ScholarshipFormComponent },
{ path: 'scholarship-form-upload', component: ScholarshipFormUploadComponent},
{ path: 'institute-form', component: InstituteRequestFormComponent},
{ path: 'application-verification', component: StudentApplicationVerificationComponent},
{ path: '',   redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }