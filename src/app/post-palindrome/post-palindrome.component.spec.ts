import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPalindromeComponent } from './post-palindrome.component';

describe('PostPalindromeComponent', () => {
  let component: PostPalindromeComponent;
  let fixture: ComponentFixture<PostPalindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostPalindromeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
