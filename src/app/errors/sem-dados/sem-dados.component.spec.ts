import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemDadosComponent } from './sem-dados.component';

describe('SemDadosComponent', () => {
  let component: SemDadosComponent;
  let fixture: ComponentFixture<SemDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
