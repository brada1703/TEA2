import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrativesComponent } from './demonstratives.component';

describe('DemonstrativesComponent', () => {
  let component: DemonstrativesComponent;
  let fixture: ComponentFixture<DemonstrativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemonstrativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstrativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
