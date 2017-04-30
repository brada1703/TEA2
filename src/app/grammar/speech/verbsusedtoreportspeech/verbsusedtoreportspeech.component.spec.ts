import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsusedtoreportspeechComponent } from './verbsusedtoreportspeech.component';

describe('VerbsusedtoreportspeechComponent', () => {
  let component: VerbsusedtoreportspeechComponent;
  let fixture: ComponentFixture<VerbsusedtoreportspeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsusedtoreportspeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsusedtoreportspeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
