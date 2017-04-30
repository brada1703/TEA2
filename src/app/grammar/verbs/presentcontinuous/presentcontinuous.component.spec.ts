import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentcontinuousComponent } from './presentcontinuous.component';

describe('PresentcontinuousComponent', () => {
  let component: PresentcontinuousComponent;
  let fixture: ComponentFixture<PresentcontinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentcontinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentcontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
