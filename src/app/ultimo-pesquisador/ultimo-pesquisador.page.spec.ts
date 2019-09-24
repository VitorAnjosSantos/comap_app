import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoPesquisadorPage } from './ultimo-pesquisador.page';

describe('UltimoPesquisadorPage', () => {
  let component: UltimoPesquisadorPage;
  let fixture: ComponentFixture<UltimoPesquisadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimoPesquisadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoPesquisadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
