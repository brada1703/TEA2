import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounsComponent } from './pronouns.component';

describe('PronounsComponent', () => {
  let component: PronounsComponent;
  let fixture: ComponentFixture<PronounsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronounsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
