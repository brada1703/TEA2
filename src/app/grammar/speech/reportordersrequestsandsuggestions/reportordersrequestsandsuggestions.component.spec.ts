import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportordersrequestsandsuggestionsComponent } from './reportordersrequestsandsuggestions.component';

describe('ReportordersrequestsandsuggestionsComponent', () => {
  let component: ReportordersrequestsandsuggestionsComponent;
  let fixture: ComponentFixture<ReportordersrequestsandsuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportordersrequestsandsuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportordersrequestsandsuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
