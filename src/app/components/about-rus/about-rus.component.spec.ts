import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRusComponent } from './about-rus.component';

describe('AboutRusComponent', () => {
  let component: AboutRusComponent;
  let fixture: ComponentFixture<AboutRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
