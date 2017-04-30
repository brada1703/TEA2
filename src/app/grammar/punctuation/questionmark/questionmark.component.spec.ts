import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionmarkComponent } from './questionmark.component';

describe('QuestionmarkComponent', () => {
  let component: QuestionmarkComponent;
  let fixture: ComponentFixture<QuestionmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
