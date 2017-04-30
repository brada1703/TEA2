import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenthesesandbracketsComponent } from './parenthesesandbrackets.component';

describe('ParenthesesandbracketsComponent', () => {
  let component: ParenthesesandbracketsComponent;
  let fixture: ComponentFixture<ParenthesesandbracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenthesesandbracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenthesesandbracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
