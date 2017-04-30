import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbtensesComponent } from './verbtenses.component';

describe('VerbtensesComponent', () => {
  let component: VerbtensesComponent;
  let fixture: ComponentFixture<VerbtensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbtensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbtensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
