import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentProcessComponent } from './development-process.component';

describe('DevelopmentProcessComponent', () => {
  let component: DevelopmentProcessComponent;
  let fixture: ComponentFixture<DevelopmentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
