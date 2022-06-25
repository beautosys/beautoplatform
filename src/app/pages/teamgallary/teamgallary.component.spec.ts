import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamgallaryComponent } from './teamgallary.component';

describe('TeamgallaryComponent', () => {
  let component: TeamgallaryComponent;
  let fixture: ComponentFixture<TeamgallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamgallaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamgallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
