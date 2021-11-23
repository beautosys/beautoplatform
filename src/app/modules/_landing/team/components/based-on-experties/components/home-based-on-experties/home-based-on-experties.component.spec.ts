import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBasedOnExpertiesComponent } from './home-based-on-experties.component';

describe('HomeBasedOnExpertiesComponent', () => {
  let component: HomeBasedOnExpertiesComponent;
  let fixture: ComponentFixture<HomeBasedOnExpertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBasedOnExpertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBasedOnExpertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
