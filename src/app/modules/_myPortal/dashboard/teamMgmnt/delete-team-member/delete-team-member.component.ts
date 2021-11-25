import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-team-member',
  templateUrl: './delete-team-member.component.html',
  styleUrls: ['./delete-team-member.component.scss']
})
export class DeleteTeamMemberComponent implements OnInit {

  message: string = "Are you sure?"
  confirmButtonText = "Remove team"
  cancelButtonText = "Cancel"
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
 
  private dialogRef: MatDialogRef<DeleteTeamMemberComponent>) { 
    
  }

  ngOnInit(): void {

  }

  onConfirmClick(){
    this.dialogRef.close(true);
  }

}
