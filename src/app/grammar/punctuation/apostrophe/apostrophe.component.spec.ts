import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostropheComponent } from './apostrophe.component';

describe('ApostropheComponent', () => {
  let component: ApostropheComponent;
  let fixture: ComponentFixture<ApostropheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApostropheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostropheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
