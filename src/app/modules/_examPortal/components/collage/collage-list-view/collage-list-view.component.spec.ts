import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageListViewComponent } from './collage-list-view.component';

describe('CollageListViewComponent', () => {
  let component: CollageListViewComponent;
  let fixture: ComponentFixture<CollageListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollageListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
