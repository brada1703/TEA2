import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureperfectcontinuousComponent } from './futureperfectcontinuous.component';

describe('FutureperfectcontinuousComponent', () => {
  let component: FutureperfectcontinuousComponent;
  let fixture: ComponentFixture<FutureperfectcontinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureperfectcontinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureperfectcontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
