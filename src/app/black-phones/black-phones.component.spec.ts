import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPhonesComponent } from './black-phones.component';

describe('BlackPhonesComponent', () => {
  let component: BlackPhonesComponent;
  let fixture: ComponentFixture<BlackPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlackPhonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlackPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
