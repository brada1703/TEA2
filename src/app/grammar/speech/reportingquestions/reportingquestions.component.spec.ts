import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingquestionsComponent } from './reportingquestions.component';

describe('ReportingquestionsComponent', () => {
  let component: ReportingquestionsComponent;
  let fixture: ComponentFixture<ReportingquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
