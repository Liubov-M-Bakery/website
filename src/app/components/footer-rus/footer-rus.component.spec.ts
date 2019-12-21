import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRusComponent } from './footer-rus.component';

describe('FooterRusComponent', () => {
  let component: FooterRusComponent;
  let fixture: ComponentFixture<FooterRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
