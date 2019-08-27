import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortiesComponent } from './forties.component';

describe('FortiesComponent', () => {
  let component: FortiesComponent;
  let fixture: ComponentFixture<FortiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
