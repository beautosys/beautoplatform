import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSAndToolsComponent } from './skill-sand-tools.component';

describe('SkillSAndToolsComponent', () => {
  let component: SkillSAndToolsComponent;
  let fixture: ComponentFixture<SkillSAndToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSAndToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
