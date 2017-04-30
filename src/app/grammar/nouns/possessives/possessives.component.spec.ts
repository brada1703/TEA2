import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessivesComponent } from './possessives.component';

describe('PossessivesComponent', () => {
  let component: PossessivesComponent;
  let fixture: ComponentFixture<PossessivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
