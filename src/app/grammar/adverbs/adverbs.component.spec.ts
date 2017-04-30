import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverbsComponent } from './adverbs.component';

describe('AdverbsComponent', () => {
  let component: AdverbsComponent;
  let fixture: ComponentFixture<AdverbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
