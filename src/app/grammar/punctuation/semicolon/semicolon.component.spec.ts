import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemicolonComponent } from './semicolon.component';

describe('SemicolonComponent', () => {
  let component: SemicolonComponent;
  let fixture: ComponentFixture<SemicolonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemicolonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemicolonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
