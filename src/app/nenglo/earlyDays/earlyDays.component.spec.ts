import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { earlyDaysComponent } from './earlyDays.component';

describe('earlyDaysComponent', () => {
  let component: earlyDaysComponent;
  let fixture: ComponentFixture<earlyDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ earlyDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(earlyDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
