import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurUnitsComponent } from './our-units.component';

describe('OurUnitsComponent', () => {
  let component: OurUnitsComponent;
  let fixture: ComponentFixture<OurUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
