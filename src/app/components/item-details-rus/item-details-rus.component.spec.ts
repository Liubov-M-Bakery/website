import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsRusComponent } from './item-details-rus.component';

describe('ItemDetailsRusComponent', () => {
  let component: ItemDetailsRusComponent;
  let fixture: ComponentFixture<ItemDetailsRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
