import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastcontinuousComponent } from './pastcontinuous.component';

describe('PastcontinuousComponent', () => {
  let component: PastcontinuousComponent;
  let fixture: ComponentFixture<PastcontinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastcontinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastcontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
