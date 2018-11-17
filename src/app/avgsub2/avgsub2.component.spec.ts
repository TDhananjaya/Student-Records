import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Avgsub2Component } from './avgsub2.component';

describe('Avgsub2Component', () => {
  let component: Avgsub2Component;
  let fixture: ComponentFixture<Avgsub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Avgsub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Avgsub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
