import { Component, HostBinding, HostListener } from '@angular/core';
import { UserInfoService } from './shared/auth/user-info/user-info.service';
import { HeaderTitleService } from './theme/header/header-title.service';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beautoNew';

  showScroll: any;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  constructor(private userInfoService: UserInfoService, private headerTitleService: HeaderTitleService, public overlayContainer: OverlayContainer) {

    let user = userInfoService.getUserInfo();
    if (user.roles[0] == 'Admin' || user.roles[0] == 'HR Manager') {
      this.headerTitleService.updateMenuBar(false);
    }
    // this.userInfoService.updateUserInfo({id:'',name:'',email:'',roles:['Visitor'],token:''});
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

  // @HostBinding('class') componentCssClass: any;

  // onSetTheme(theme: string) {
  //   this.overlayContainer.getContainerElement().classList.add(theme);
  //   this.componentCssClass = theme;
  // }

}
