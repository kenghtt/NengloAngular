import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NengloComponent } from './nenglo.component';

describe('NengloComponent', () => {
  let component: NengloComponent;
  let fixture: ComponentFixture<NengloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NengloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NengloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
