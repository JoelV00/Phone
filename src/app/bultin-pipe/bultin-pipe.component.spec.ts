import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BultinPipeComponent } from './bultin-pipe.component';

describe('BultinPipeComponent', () => {
  let component: BultinPipeComponent;
  let fixture: ComponentFixture<BultinPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BultinPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BultinPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
