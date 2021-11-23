import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamCrudOpeService } from '../_service/team-crud-ope.service';

@Component({
  selector: 'app-edit-team-member',
  templateUrl: './edit-team-member.component.html',
  styleUrls: ['./edit-team-member.component.scss']
})
export class EditTeamMemberComponent implements OnInit {
  editTeamMember:FormGroup;
  loggedUser:any
  getuser: any;
  profileImgUrl!: File;
  fileInfo!:string;
  selectedDataId: any;
  geteditData:any 
  arrayGetDataByID:any[]=[]
  setData: any;
  constructor(private addTeamService:TeamCrudOpeService, private activateRoute:ActivatedRoute,
    private router:Router) {

    this.activateRoute.params.subscribe(parameter => {

this.geteditData = parameter

// (this.geteditData)
      this.setTeamMmberdata(parameter);

    })

    this.editTeamMember=new FormGroup({
      empidID:new FormControl('', [Validators.required]),
      name:new FormControl('', [Validators.required]),
      designation:new FormControl('',Validators.required),
      department:new FormControl('',Validators.required),
      facebookUrl:new FormControl('',Validators.required),
      tweeterUrl:new FormControl('',Validators.required),
      intagramUrl:new FormControl('',Validators.required),
      youtubeUrl:new FormControl('',Validators.required),
      linkdinUrl:new FormControl('',Validators.required),
      info:new FormControl('',Validators.required),

    });
   }

  ngOnInit(): void {
    ;
    this.loggedUser = localStorage.getItem('allData')
    // ('this selected', this.selectedDataId)

    this.getDataByEMPID()

   
  }

  getDataByEMPID(){
    this.addTeamService.getTeamMembersBYEMPID(this.geteditData).subscribe((resEMPID:any)=>{
      this.setData = resEMPID;
this.editTeamMember.patchValue({
      empidID: this.setData.empidID,
      name:this.setData.name,
      designation:this.setData.designation.designationName,
      department:this.setData.department.departmentName,
      facebookUrl:this.setData.facebookUrl,
      tweeterUrl:this.setData.tweeterUrl,
      intagramUrl:this.setData.intsagramUrl,
      youtubeUrl:this.setData.youtubeUrl,
      linkdinUrl:this.setData.linkdinUrl,
      info:this.setData.info 
})
})
  }

  setTeamMmberdata(geteditData:any){
    
    this.addTeamService.updateTeamMember(geteditData).subscribe((checkData:any)=>{
      
      
        // ('edit data got',geteditData + ' '+ checkData )
      
    })
  }


  oneditTeamMember(){

    var data = {
      empidID: this.editTeamMember.value.empidID,
      name:this.editTeamMember.value.name,
      designation:this.editTeamMember.value.designationName,
      department:this.editTeamMember.value.departmentName,
      facebookUrl:this.editTeamMember.value.facebookUrl,
      tweeterUrl:this.editTeamMember.value.tweeterUrl,
      intagramUrl:this.editTeamMember.value.intsagramUrl,
      youtubeUrl:this.editTeamMember.value.youtubeUrl,
      linkdinUrl:this.editTeamMember.value.linkdinUrl,
      info:this.editTeamMember.value.info 
      }

   this.addTeamService.updateTeamMember(data).subscribe((response:any)=>{

     
   this.router.navigate(['dashboard/websAdmin/viewTeam'])
   })

  }
}
