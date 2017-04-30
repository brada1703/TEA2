import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturecontinuousComponent } from './futurecontinuous.component';

describe('FuturecontinuousComponent', () => {
  let component: FuturecontinuousComponent;
  let fixture: ComponentFixture<FuturecontinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturecontinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturecontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
