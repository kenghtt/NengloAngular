import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentDayComponent } from './present-day.component';

describe('PresentDayComponent', () => {
  let component: PresentDayComponent;
  let fixture: ComponentFixture<PresentDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
