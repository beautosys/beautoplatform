import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit, OnDestroy {
  min:number=30;
  isResendOn:boolean=false;
  code1:any;
  code2:any;
  code3:any;
  code4:any;
  code5:any;
  code6:any;
  code7:any;
  code8:any;
  isError:boolean=false;
  isEmpty:boolean=false;
  forgotPasswordSubscription: Subscription = new Subscription;
  validateOTPSubscription: Subscription = new Subscription;
  constructor(private route:ActivatedRoute,private router:Router, private authService:AuthService, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
    // this.headerTitleService.updatedTitle('');
    this.countDown();
    
  }

  onResend(){
    this.isResendOn=false;
    this.min=30;
    this.forgotPasswordSubscription = this.authService.forgotPassword({email:localStorage.getItem('email')}).subscribe(
      response=>{
      }
    );
    this.countDown();

  }

  countDown(){
    
    setTimeout(()=>{
       if(this.min!=1){
         this.min=this.min-1;
         this.isResendOn=false;
        this.countDown();
       }else{
        this.min=0;
        this.isResendOn=true;
        
       }
    },1000)
  }

  onKeyPress(e:any){
    this.isError=false;
    this.isEmpty=false;
    let element;
   if (e.code !== 'Backspace')
        element = e.srcElement.nextElementSibling;

    if (e.code === 'Backspace')
        element = e.srcElement.previousElementSibling;

    if(element == null)
        return;
    else
        element.focus();
  }

  onContinue(){
    if((this.code1!=undefined || this.code1!=null) && (this.code2!=undefined || this.code2!=null) && (this.code3!=undefined || this.code3!=null) && (this.code4!=undefined || this.code4!=null)
    && (this.code5!=undefined || this.code5!=null) && (this.code6!=undefined || this.code6!=null) && (this.code7!=undefined || this.code7!=null) && (this.code8!=undefined || this.code8!=null)
    ){
      let code=this.code1+this.code2+this.code3+this.code4+this.code5+this.code6+this.code7+this.code8
      this.validateOTPSubscription = this.authService.validateOTP({otp:code,email:localStorage.getItem('email')}).subscribe(
        response=>{
          if(response.message==' provide OTP is wrong try again!'){
            this.isError=true;
          }else{
            this.isError=false;
            this.router.navigate(['/auth/reset-password']);
          }
        }
      );

    }else{
      this.isEmpty=true;
    }
  }

  ngOnDestroy(){
    this.forgotPasswordSubscription.unsubscribe();
    this.validateOTPSubscription.unsubscribe();
  }

}
