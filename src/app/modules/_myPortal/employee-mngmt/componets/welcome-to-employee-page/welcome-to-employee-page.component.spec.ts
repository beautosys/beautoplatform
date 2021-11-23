import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToEmployeePageComponent } from './welcome-to-employee-page.component';

describe('WelcomeToEmployeePageComponent', () => {
  let component: WelcomeToEmployeePageComponent;
  let fixture: ComponentFixture<WelcomeToEmployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeToEmployeePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
