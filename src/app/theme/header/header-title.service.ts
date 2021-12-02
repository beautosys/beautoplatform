import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/auth/user-info/user';
@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  title: string = '';
  start: string = '';
  user: User = { id: '', name: '', email: '', roles: ['ROLE_VISITOR'], token: '' };
  commonMenu:boolean=true;
  private dataSource = new BehaviorSubject<string>(this.title);
  data = this.dataSource.asObservable();

  private dataSource1 = new BehaviorSubject<string>(this.start);
  data1 = this.dataSource1.asObservable();

  private userSource = new BehaviorSubject<User>(this.user);
  userData = this.userSource.asObservable();

  private commonMenuSource = new BehaviorSubject<boolean>(this.commonMenu);
  menuBar = this.commonMenuSource.asObservable();

  constructor() { }
  updatedTitle(data: string) {

    this.dataSource.next(data);
  }

  updatedStart(data1: string) {
    this.dataSource1.next(data1);
  }

  updateUser(userData: User) {
    this.userSource.next(userData);
  }

  updateMenuBar(menuBar: boolean) {
    this.commonMenuSource.next(menuBar);
  }
}

