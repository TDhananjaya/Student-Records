import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranks2Component } from './ranks2.component';

describe('Ranks2Component', () => {
  let component: Ranks2Component;
  let fixture: ComponentFixture<Ranks2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ranks2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ranks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
