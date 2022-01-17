import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageDetailsComponent } from './collage-details.component';

describe('CollageDetailsComponent', () => {
  let component: CollageDetailsComponent;
  let fixture: ComponentFixture<CollageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
