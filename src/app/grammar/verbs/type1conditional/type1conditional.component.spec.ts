import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type1conditionalComponent } from './type1conditional.component';

describe('Type1conditionalComponent', () => {
  let component: Type1conditionalComponent;
  let fixture: ComponentFixture<Type1conditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type1conditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type1conditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
