import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWarComponent } from './post-war.component';

describe('PostWarComponent', () => {
  let component: PostWarComponent;
  let fixture: ComponentFixture<PostWarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
