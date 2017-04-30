import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2conditionalComponent } from './type2conditional.component';

describe('Type2conditionalComponent', () => {
  let component: Type2conditionalComponent;
  let fixture: ComponentFixture<Type2conditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type2conditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type2conditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
