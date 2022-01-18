import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCollegeComponent } from './add-update-college.component';

describe('AddUpdateCollegeComponent', () => {
  let component: AddUpdateCollegeComponent;
  let fixture: ComponentFixture<AddUpdateCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateCollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
