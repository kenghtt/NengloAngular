import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtiesComponent } from './sixties.component';

describe('SixtiesComponent', () => {
  let component: SixtiesComponent;
  let fixture: ComponentFixture<SixtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
