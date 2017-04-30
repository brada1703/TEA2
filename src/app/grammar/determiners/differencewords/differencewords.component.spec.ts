import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencewordsComponent } from './differencewords.component';

describe('DifferencewordsComponent', () => {
  let component: DifferencewordsComponent;
  let fixture: ComponentFixture<DifferencewordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferencewordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferencewordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
