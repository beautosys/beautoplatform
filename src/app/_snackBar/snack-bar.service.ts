import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  horizontalPosition:MatSnackBarHorizontalPosition = 'right'
  verticalPosition:MatSnackBarVerticalPosition = 'top'
  constructor(private snackBar:MatSnackBar) { }


  openSnackBarFrSuccess(messagae:string){
  this.snackBar.open(messagae,'x',{
    duration:2000,
    horizontalPosition:this.horizontalPosition,
    verticalPosition:this.verticalPosition,
    panelClass:['successMessage']
  })
  }

  openSnackBarWarning(errorMsg:string){
this.snackBar.open(errorMsg, 'x',{
  duration:2000,
  horizontalPosition:this.horizontalPosition,
  verticalPosition:this.verticalPosition,
  panelClass:['warningMessage']
})
  }
}
