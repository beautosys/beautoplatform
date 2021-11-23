import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerLandingComponent } from './career-landing.component';

describe('CareerLandingComponent', () => {
  let component: CareerLandingComponent;
  let fixture: ComponentFixture<CareerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
