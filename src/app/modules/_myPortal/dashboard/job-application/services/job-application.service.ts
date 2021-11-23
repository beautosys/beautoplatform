import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobApplication } from '../model/job-application.model';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  constructor(private http:HttpClient) { }

  getJobApplicationList():Observable<JobApplication[]>{
    return this.http.get<JobApplication[]>(environment.jobApplicationList);
  }


}
