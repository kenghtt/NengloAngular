import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtiesComponent } from './thirties.component';

describe('ThirtiesComponent', () => {
  let component: ThirtiesComponent;
  let fixture: ComponentFixture<ThirtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
