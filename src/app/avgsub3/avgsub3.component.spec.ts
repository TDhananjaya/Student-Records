import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Avgsub3Component } from './avgsub3.component';

describe('Avgsub3Component', () => {
  let component: Avgsub3Component;
  let fixture: ComponentFixture<Avgsub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Avgsub3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Avgsub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
