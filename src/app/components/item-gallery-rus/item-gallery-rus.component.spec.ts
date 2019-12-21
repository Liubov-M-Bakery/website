import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGalleryRusComponent } from './item-gallery-rus.component';

describe('ItemGalleryRusComponent', () => {
  let component: ItemGalleryRusComponent;
  let fixture: ComponentFixture<ItemGalleryRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGalleryRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGalleryRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
