import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { PrivacyAndPolicyComponent } from './components/privacy-and-policy/privacy-and-policy.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent,
    data: {
      title: 'Login',
      start: '',
      breadcrumb: [
        {
          label: 'Login',
          url: ''
        }
      ]
    },
  },
  {
    path: 'registration', component: RegistrationComponent,
    data: {
      title: 'Registration',
      start: '',
      breadcrumb: [
        {
          label: 'Registration',
          url: ''
        }
      ]
    },
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password',
      start: '',
      breadcrumb: [
        {
          label: 'Forgot Password',
          url: ''
        }
      ]
    },
  },
  {
    path: 'change-password', component: ChangePasswordComponent,
    data: {
      title: 'Change Password',
      start: '',
      breadcrumb: [
        {
          label: 'Change Password',
          url: ''
        }
      ]
    },
  },
  {
    path: 'verification-code', component: VerificationCodeComponent,
    data: {
      title: 'Verification Code',
      start: 'Forgot Password / ',
      breadcrumb: [
        {
          label: 'Verification Code',
          url: ''
        }
      ]
    },
  },
  {
    path: 'reset-password', component: ResetPasswordComponent,
    data: {
      title: 'Reset Password',
      start: 'Forgot Password / ',
      breadcrumb: [
        {
          label: 'Reset Password',
          url: ''
        }
      ]
    },

  },
  {
    path: 'terms-and-condition', component: TermsAndConditionComponent,
    data: {
      title: 'Terms and Condition',
      start: 'Registration / ',
      breadcrumb: [
        {
          label: 'Terms and Condition',
          url: ''
        }
      ]
    },
  },
  {
    path: 'privacy-and-policy', component: PrivacyAndPolicyComponent,
    data: {
      title: 'Privacy and Policy',
      start: 'Registration / ',
      breadcrumb: [
        {
          label: 'Privacy and Policy',
          url: ''
        }
      ]
    },
  },

  // { path: '401', component: UnathorizedComponentComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
