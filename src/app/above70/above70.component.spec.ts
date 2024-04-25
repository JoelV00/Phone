import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Above70Component } from './above70.component';

describe('Above70Component', () => {
  let component: Above70Component;
  let fixture: ComponentFixture<Above70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Above70Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Above70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
