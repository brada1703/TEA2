import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporthopesrequestsandpromisesComponent } from './reporthopesrequestsandpromises.component';

describe('ReporthopesrequestsandpromisesComponent', () => {
  let component: ReporthopesrequestsandpromisesComponent;
  let fixture: ComponentFixture<ReporthopesrequestsandpromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporthopesrequestsandpromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporthopesrequestsandpromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
