import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredeterminersComponent } from './predeterminers.component';

describe('PredeterminersComponent', () => {
  let component: PredeterminersComponent;
  let fixture: ComponentFixture<PredeterminersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredeterminersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredeterminersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
