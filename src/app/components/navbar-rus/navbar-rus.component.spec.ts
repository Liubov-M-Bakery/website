import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRusComponent } from './navbar-rus.component';

describe('NavbarRusComponent', () => {
  let component: NavbarRusComponent;
  let fixture: ComponentFixture<NavbarRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
