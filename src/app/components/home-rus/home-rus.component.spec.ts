import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRusComponent } from './home-rus.component';

describe('HomeRusComponent', () => {
  let component: HomeRusComponent;
  let fixture: ComponentFixture<HomeRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
