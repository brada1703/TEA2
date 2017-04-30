import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounsandpossessivedeterminersComponent } from './pronounsandpossessivedeterminers.component';

describe('PronounsandpossessivedeterminersComponent', () => {
  let component: PronounsandpossessivedeterminersComponent;
  let fixture: ComponentFixture<PronounsandpossessivedeterminersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronounsandpossessivedeterminersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounsandpossessivedeterminersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
