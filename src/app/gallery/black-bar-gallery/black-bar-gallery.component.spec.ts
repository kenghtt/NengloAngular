import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBarGalleryComponent } from './black-bar-gallery.component';

describe('BlackBarGalleryComponent', () => {
  let component: BlackBarGalleryComponent;
  let fixture: ComponentFixture<BlackBarGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackBarGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBarGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
