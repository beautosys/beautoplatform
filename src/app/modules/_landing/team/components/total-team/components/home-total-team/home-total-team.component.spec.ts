import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTotalTeamComponent } from './home-total-team.component';

describe('HomeTotalTeamComponent', () => {
  let component: HomeTotalTeamComponent;
  let fixture: ComponentFixture<HomeTotalTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTotalTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTotalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
