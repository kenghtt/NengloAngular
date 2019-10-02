import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBarNavComponent } from './black-bar-nav.component';

describe('BlackBarNavComponent', () => {
  let component: BlackBarNavComponent;
  let fixture: ComponentFixture<BlackBarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackBarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
