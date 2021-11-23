import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMngmtComponent } from './employee-mngmt.component';

describe('EmployeeMngmtComponent', () => {
  let component: EmployeeMngmtComponent;
  let fixture: ComponentFixture<EmployeeMngmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMngmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMngmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
