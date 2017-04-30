import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributivesComponent } from './distributives.component';

describe('DistributivesComponent', () => {
  let component: DistributivesComponent;
  let fixture: ComponentFixture<DistributivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
