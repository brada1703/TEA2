import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannerComponent } from './manner.component';

describe('MannerComponent', () => {
  let component: MannerComponent;
  let fixture: ComponentFixture<MannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
