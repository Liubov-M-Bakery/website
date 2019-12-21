import { Component, OnInit } from '@angular/core';
import { HomeRusComponent } from '../home-rus/home-rus.component';
import { ItemGalleryRusComponent } from '../item-gallery-rus/item-gallery-rus.component';
import { ItemDetailsRusComponent } from '../item-details-rus/item-details-rus.component';
import { AboutRusComponent } from '../about-rus/about-rus.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


@Component({
  selector: 'app-navbar-rus',
  templateUrl: './navbar-rus.component.html',
  styleUrls: ['./navbar-rus.component.css']
})
export class NavbarRusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
