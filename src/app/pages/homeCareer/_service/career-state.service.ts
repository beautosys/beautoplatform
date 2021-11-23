import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerStateService {
  start:any={file:null,finalObject:null,nav:''};
  private dataSource = new BehaviorSubject<any>(this.start);
  data = this.dataSource.asObservable();
  constructor() { }
    updatedData(data: any){
      this.dataSource.next(data);
      }
}
