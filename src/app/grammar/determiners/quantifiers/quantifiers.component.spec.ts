import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantifiersComponent } from './quantifiers.component';

describe('QuantifiersComponent', () => {
  let component: QuantifiersComponent;
  let fixture: ComponentFixture<QuantifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantifiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
