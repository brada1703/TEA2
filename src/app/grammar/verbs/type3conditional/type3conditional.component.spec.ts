import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type3conditionalComponent } from './type3conditional.component';

describe('Type3conditionalComponent', () => {
  let component: Type3conditionalComponent;
  let fixture: ComponentFixture<Type3conditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type3conditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type3conditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
