import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedOnExpertiesComponent } from './based-on-experties.component';

describe('BasedOnExpertiesComponent', () => {
  let component: BasedOnExpertiesComponent;
  let fixture: ComponentFixture<BasedOnExpertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasedOnExpertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasedOnExpertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
