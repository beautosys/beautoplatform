import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesMissionVissionComponent } from './values-mission-vission.component';

describe('ValuesMissionVissionComponent', () => {
  let component: ValuesMissionVissionComponent;
  let fixture: ComponentFixture<ValuesMissionVissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuesMissionVissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesMissionVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
