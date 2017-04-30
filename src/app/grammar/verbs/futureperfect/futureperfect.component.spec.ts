import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureperfectComponent } from './futureperfect.component';

describe('FutureperfectComponent', () => {
  let component: FutureperfectComponent;
  let fixture: ComponentFixture<FutureperfectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureperfectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureperfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
