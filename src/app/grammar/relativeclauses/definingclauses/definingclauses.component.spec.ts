import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiningclausesComponent } from './definingclauses.component';

describe('DefiningclausesComponent', () => {
  let component: DefiningclausesComponent;
  let fixture: ComponentFixture<DefiningclausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiningclausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiningclausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
