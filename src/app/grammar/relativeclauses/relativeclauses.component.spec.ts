import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeclausesComponent } from './relativeclauses.component';

describe('RelativeclausesComponent', () => {
  let component: RelativeclausesComponent;
  let fixture: ComponentFixture<RelativeclausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeclausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeclausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
