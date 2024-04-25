import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTwoComponent } from './last-two.component';

describe('LastTwoComponent', () => {
  let component: LastTwoComponent;
  let fixture: ComponentFixture<LastTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
