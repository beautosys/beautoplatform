import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { PrivacyAndPolicyComponent } from './components/privacy-and-policy/privacy-and-policy.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ThemeModule } from 'src/app/theme/theme.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    VerificationCodeComponent,
    ResetPasswordComponent,
    TermsAndConditionComponent,
    PrivacyAndPolicyComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreRoutingModule,
    ThemeModule

  ],
})
export class CoreModule { }
