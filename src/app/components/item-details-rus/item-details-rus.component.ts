import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details-rus',
  templateUrl: './item-details-rus.component.html',
  styleUrls: ['./item-details-rus.component.scss']
})
export class ItemDetailsRusComponent implements OnInit {

  itemName: string;

  constructor(
    private actRoute: ActivatedRoute) {
    const id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');

    this.itemName = id + '.jpg';
  }

}
