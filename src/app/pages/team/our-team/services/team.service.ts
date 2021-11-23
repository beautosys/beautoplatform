import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BASE_URL } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeamMembers() {
    return this.http.get(environment.getteammember).pipe(
      map((response:any)=>{
        for(let i in response){
          response[i].document.fileUrl=BASE_URL+response[i].document.fileUrl.substring(1);
        }
        return response;
      })
    );
  }
}
