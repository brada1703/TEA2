import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyphenanddashComponent } from './hyphenanddash.component';

describe('HyphenanddashComponent', () => {
  let component: HyphenanddashComponent;
  let fixture: ComponentFixture<HyphenanddashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyphenanddashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyphenanddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
