import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleLetterComponent } from './middle-letter.component';

describe('MiddleLetterComponent', () => {
  let component: MiddleLetterComponent;
  let fixture: ComponentFixture<MiddleLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddleLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
