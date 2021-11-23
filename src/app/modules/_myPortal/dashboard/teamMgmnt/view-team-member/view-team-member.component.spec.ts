import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamMemberComponent } from './view-team-member.component';

describe('ViewTeamMemberComponent', () => {
  let component: ViewTeamMemberComponent;
  let fixture: ComponentFixture<ViewTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
