import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryErrorPageComponent } from './gallery-error-page.component';

describe('GalleryErrorPageComponent', () => {
  let component: GalleryErrorPageComponent;
  let fixture: ComponentFixture<GalleryErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
