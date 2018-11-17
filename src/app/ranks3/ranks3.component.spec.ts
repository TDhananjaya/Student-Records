import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranks3Component } from './ranks3.component';

describe('Ranks3Component', () => {
  let component: Ranks3Component;
  let fixture: ComponentFixture<Ranks3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ranks3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ranks3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
