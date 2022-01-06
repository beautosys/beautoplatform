import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcollagesComponent } from './addcollages.component';

describe('AddcollagesComponent', () => {
  let component: AddcollagesComponent;
  let fixture: ComponentFixture<AddcollagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcollagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcollagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
