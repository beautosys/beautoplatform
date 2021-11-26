import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teammember } from '../_model/team-memeber';

@Injectable({
  providedIn: 'root'
})
export class TeamCrudOpeService {

  constructor(private http: HttpClient) { }

  getTeamMembers():Observable<Teammember[]> {
    return this.http.get<Teammember[]>(environment.getteammember);
  }
  getTeamMembersBYEMPID(empidID:any){

    return this.http.get<Teammember[]>(`${environment.getTeamMmberByEmpID}`+ '/' + empidID.empidID);

  }
 deleteTeamMember(empidId:any){

return this.http.delete(environment.deleteTeamaMember+`?empId=${empidId.empidID}`)
 }

 updateTeamMember(data:any){
  return this.http.post(environment.updateTeamMember,data);

 }
  addTeamMember(file:File,data:any){
    let formData = new FormData();
    formData.append("profileImgUrl", file);
    formData.append("empidID", data.empidID);
    formData.append("name", data.name);
    formData.append("designation", data.designation);
    formData.append("department", data.department);
    formData.append("facebookUrl", data.facebookUrl);
    formData.append("tweeterUrl", data.tweeterUrl);
    formData.append("instagramUrl", data.intagramUrl);
    formData.append("linkedinUrl", data.linkdinUrl);
    formData.append("youtubeUrl", data.youtubeUrl);
    formData.append("info", data.info);

    return this.http.post(environment.addTeamMember, formData)
  // return  this.http.post(`${environment.addTeamMember}`,data,this.httpHeader.getCommonHttpHeaders());

  }

 
}
