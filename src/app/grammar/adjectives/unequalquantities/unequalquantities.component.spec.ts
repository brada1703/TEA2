import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnequalquantitiesComponent } from './unequalquantities.component';

describe('UnequalquantitiesComponent', () => {
  let component: UnequalquantitiesComponent;
  let fixture: ComponentFixture<UnequalquantitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnequalquantitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnequalquantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
