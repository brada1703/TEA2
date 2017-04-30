import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NondefiningclausesComponent } from './nondefiningclauses.component';

describe('NondefiningclausesComponent', () => {
  let component: NondefiningclausesComponent;
  let fixture: ComponentFixture<NondefiningclausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NondefiningclausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NondefiningclausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
