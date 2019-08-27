import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightiesComponent } from './eighties.component';

describe('EightiesComponent', () => {
  let component: EightiesComponent;
  let fixture: ComponentFixture<EightiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
