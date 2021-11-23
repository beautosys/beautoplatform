import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TeamMember } from '../model/team-member';

@Injectable({
  providedIn: 'root'
})
export class AdminTeamService {

  constructor(private http:HttpClient) { }
  
  getDesignationList():Observable<any>{
    return this.http.get(environment.designationList);
  }

  getDepartmentList():Observable<any>{
    return this.http.get(environment.departmentList);
  }

  teamMembersList():Observable<TeamMember[]>{
    return this.http.get<TeamMember[]>(environment.getteammember).pipe(
      map((response:TeamMember[])=>{
        for(let i in response){
          response[i].department=response[i].department.departmentName;
          response[i].designation=response[i].designation.designationName;
          response[i].action='';
        }
        return response;
      })
    )
  }
 
  addTeamMember(file:File, data:any):Observable<any>{
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
  }


  updateTeamMember(body:any):Observable<any>{   
    return this.http.post(environment.updateTeamMember,body);
  }

  deleteTeamMember(empidId:any):Observable<any>{ 
    return this.http.delete(environment.deleteTeamaMember+`?empId=${empidId}`);
  }
}
