import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminersComponent } from './determiners.component';

describe('DeterminersComponent', () => {
  let component: DeterminersComponent;
  let fixture: ComponentFixture<DeterminersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
