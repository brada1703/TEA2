import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareattributesComponent } from './compareattributes.component';

describe('CompareattributesComponent', () => {
  let component: CompareattributesComponent;
  let fixture: ComponentFixture<CompareattributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareattributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
