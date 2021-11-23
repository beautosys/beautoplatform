import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTeamComponent } from './total-team.component';

describe('TotalTeamComponent', () => {
  let component: TotalTeamComponent;
  let fixture: ComponentFixture<TotalTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
