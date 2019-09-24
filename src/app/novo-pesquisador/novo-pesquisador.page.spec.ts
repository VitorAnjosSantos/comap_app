import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPesquisadorPage } from './novo-pesquisador.page';

describe('NovoPesquisadorPage', () => {
  let component: NovoPesquisadorPage;
  let fixture: ComponentFixture<NovoPesquisadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPesquisadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPesquisadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
