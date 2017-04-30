import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommaComponent } from './comma.component';

describe('CommaComponent', () => {
  let component: CommaComponent;
  let fixture: ComponentFixture<CommaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
