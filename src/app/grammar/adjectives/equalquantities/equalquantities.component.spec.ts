import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualquantitiesComponent } from './equalquantities.component';

describe('EqualquantitiesComponent', () => {
  let component: EqualquantitiesComponent;
  let fixture: ComponentFixture<EqualquantitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqualquantitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualquantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
