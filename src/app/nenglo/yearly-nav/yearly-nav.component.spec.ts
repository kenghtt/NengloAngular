import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyNavComponent } from './yearly-nav.component';

describe('YearlyNavComponent', () => {
  let component: YearlyNavComponent;
  let fixture: ComponentFixture<YearlyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
