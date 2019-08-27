import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftiesComponent } from './fifties.component';

describe('FiftiesComponent', () => {
  let component: FiftiesComponent;
  let fixture: ComponentFixture<FiftiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
