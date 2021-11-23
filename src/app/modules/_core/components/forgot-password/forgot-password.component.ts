import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  submitted:boolean=false;
  isError:boolean=false;
  forgotPasswordForm:any;
  forgotPasswordSubscription: Subscription = new Subscription;
  constructor(private route:ActivatedRoute, private fb:FormBuilder, 
    private router:Router, private authService:AuthService, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
    // this.headerTitleService.updatedTitle('');
    this.forgotPasswordForm=this.fb.group({
      email:['',[Validators.required, Validators.email]]
    });
  }

  get forgotPasswordFormControl(){
    return this.forgotPasswordForm.controls;
  }

  onKeyPress(){
    this.isError=false;
  }

  onSubmit(){
    this.submitted=true;
    if(this.forgotPasswordForm.valid){
      this.forgotPasswordSubscription= this.authService.forgotPassword({email:this.forgotPasswordForm.value.email}).subscribe(
        response=>{
          if(response.code=='ER211' || response.code=='ER218'){
            this.isError=true;
          }else{
            this.isError=false;
            localStorage.setItem('email',response.email);
            this.router.navigate(['/auth/verification-code']);
          }
        },
      );
      
    }
  }

  onResendEmail(){
    this.onSubmit();
  }

  ngOnDestroy(){
    this.forgotPasswordSubscription.unsubscribe();
  }

}
