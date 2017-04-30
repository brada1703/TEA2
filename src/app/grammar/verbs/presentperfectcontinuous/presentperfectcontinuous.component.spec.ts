import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentperfectcontinuousComponent } from './presentperfectcontinuous.component';

describe('PresentperfectcontinuousComponent', () => {
  let component: PresentperfectcontinuousComponent;
  let fixture: ComponentFixture<PresentperfectcontinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentperfectcontinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentperfectcontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
