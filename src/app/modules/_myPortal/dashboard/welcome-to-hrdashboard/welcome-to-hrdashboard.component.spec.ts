import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToHRDashboardComponent } from './welcome-to-hrdashboard.component';

describe('WelcomeToHRDashboardComponent', () => {
  let component: WelcomeToHRDashboardComponent;
  let fixture: ComponentFixture<WelcomeToHRDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeToHRDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToHRDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
