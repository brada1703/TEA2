import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativesuperlativeComponent } from './comparativesuperlative.component';

describe('ComparativesuperlativeComponent', () => {
  let component: ComparativesuperlativeComponent;
  let fixture: ComponentFixture<ComparativesuperlativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativesuperlativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativesuperlativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
