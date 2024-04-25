import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrginalComponent } from './orginal.component';

describe('OrginalComponent', () => {
  let component: OrginalComponent;
  let fixture: ComponentFixture<OrginalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrginalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
