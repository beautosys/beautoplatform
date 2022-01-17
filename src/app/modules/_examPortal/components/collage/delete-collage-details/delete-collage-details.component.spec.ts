import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCollageDetailsComponent } from './delete-collage-details.component';

describe('DeleteCollageDetailsComponent', () => {
  let component: DeleteCollageDetailsComponent;
  let fixture: ComponentFixture<DeleteCollageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCollageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCollageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
