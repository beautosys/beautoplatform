import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CareerJob } from '../model/careers';

@Injectable({
  providedIn: 'root'
})
export class AdminCareerService {

  constructor(private http: HttpClient) { }

  listofJobDetails():Observable<CareerJob[]>{
    return this.http.get<CareerJob[]>(environment.listofJobDetails).pipe(
      map((response:CareerJob[])=>{
        for(let i in response){
          response[i].department=response[i].department.departmentName;
          response[i].designation=response[i].designation.designationName;
          response[i].action='';
        }
        return response;
      })
    )
  }

  getDesignationList():Observable<any>{
    return this.http.get(environment.designationList);
  }

  getDepartmentList():Observable<any>{
    return this.http.get(environment.departmentList);
  }

  addJob(body:any):Observable<any>{
    return this.http.post(environment.addjob,body);
  }


  updateJob(body:any):Observable<any>{   
    return this.http.post(environment.updatejob,body);
  }

  deletejob(id:any):Observable<any>{ 
    return this.http.delete(environment.deletejob+`?jobID=${id}`);
  }

}
