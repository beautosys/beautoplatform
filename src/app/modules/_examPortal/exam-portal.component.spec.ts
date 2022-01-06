import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPortalComponent } from './exam-portal.component';

describe('ExamPortalComponent', () => {
  let component: ExamPortalComponent;
  let fixture: ComponentFixture<ExamPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
