import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeaderShipComponent } from './home-leader-ship.component';

describe('HomeLeaderShipComponent', () => {
  let component: HomeLeaderShipComponent;
  let fixture: ComponentFixture<HomeLeaderShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeaderShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeaderShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
