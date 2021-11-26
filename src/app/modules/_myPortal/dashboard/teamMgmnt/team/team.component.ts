import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamCrudOpeService } from '../_service/team-crud-ope.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  addTeamMember: FormGroup;
  loggedUser: any
  getuser: any;
  profileImgUrl!: File;
  fileInfo!: string;
  constructor(private addTeamService: TeamCrudOpeService,
    public dialogRef: MatDialogRef<TeamComponent>,) {


    this.addTeamMember = new FormGroup({
      empidID: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      profileImgUrl: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      facebookUrl: new FormControl('', Validators.required),
      tweeterUrl: new FormControl('', Validators.required),
      intagramUrl: new FormControl('', Validators.required),
      youtubeUrl: new FormControl('', Validators.required),
      linkdinUrl: new FormControl('', Validators.required),
      info: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem('allData')

    // if(this.loggedUser.username && this.loggedUser.roles){
    //   this.getuser = this.loggedUser;
    // }


  }


  onFileChanged(event: any) {

    this.profileImgUrl = event.target.files[0];
  }
  onAddTeamMember() {

    var data = {
      "empidID": this.addTeamMember.value.empidID,
      "name": this.addTeamMember.value.name,
      // "profileImgUrl":this.profileImgUrl.name,
      "designation": this.addTeamMember.value.designation,
      "department": this.addTeamMember.value.department,
      "facebookUrl": this.addTeamMember.value.facebookUrl,
      "tweeterUrl": this.addTeamMember.value.tweeterUrl,
      "intagramUrl": this.addTeamMember.value.intagramUrl,
      "youtubeUrl": this.addTeamMember.value.youtubeUrl,
      "linkdinUrl": this.addTeamMember.value.linkdinUrl,
      "info": this.addTeamMember.value.info

    }

    this.addTeamService.addTeamMember(this.profileImgUrl, data).subscribe((response: any) => {

      if (response.code === "S208") {

        this.dialogRef.close();
      }
    })

  }
}
