import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterrogativeComponent } from './interrogative.component';

describe('InterrogativeComponent', () => {
  let component: InterrogativeComponent;
  let fixture: ComponentFixture<InterrogativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterrogativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterrogativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
