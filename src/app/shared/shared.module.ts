import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoService } from './auth/user-info/user-info.service';
import { CustomPaginationDirective } from './directives/custom-pagination.directive';

@NgModule({
  declarations: [

  
    CustomPaginationDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CustomPaginationDirective
  ],
  providers:[UserInfoService]
})
export class SharedModule { }
