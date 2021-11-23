import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaderShipComponent } from './add-leader-ship.component';

describe('AddLeaderShipComponent', () => {
  let component: AddLeaderShipComponent;
  let fixture: ComponentFixture<AddLeaderShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaderShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaderShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
