import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValuesMissionVissionComponent } from './home-values-mission-vission.component';

describe('HomeValuesMissionVissionComponent', () => {
  let component: HomeValuesMissionVissionComponent;
  let fixture: ComponentFixture<HomeValuesMissionVissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeValuesMissionVissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeValuesMissionVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
