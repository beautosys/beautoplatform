import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageGridViewComponent } from './collage-grid-view.component';

describe('CollageGridViewComponent', () => {
  let component: CollageGridViewComponent;
  let fixture: ComponentFixture<CollageGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollageGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
