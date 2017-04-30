import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromadjectivesComponent } from './fromadjectives.component';

describe('FromadjectivesComponent', () => {
  let component: FromadjectivesComponent;
  let fixture: ComponentFixture<FromadjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromadjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromadjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
