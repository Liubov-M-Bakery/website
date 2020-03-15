import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ItemGalleryComponent } from './components/item-gallery/item-gallery.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeRusComponent } from './components/home-rus/home-rus.component';
import { AboutRusComponent } from './components/about-rus/about-rus.component';
import { ItemGalleryRusComponent } from './components/item-gallery-rus/item-gallery-rus.component';
import { ItemDetailsRusComponent } from './components/item-details-rus/item-details-rus.component';
import { NavbarRusComponent } from './components/navbar-rus/navbar-rus.component';
import { FooterRusComponent } from './components/footer-rus/footer-rus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemGalleryComponent,
    ItemDetailsComponent,
    AboutComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeRusComponent,
    AboutRusComponent,
    ItemGalleryRusComponent,
    ItemDetailsRusComponent,
    NavbarRusComponent,
    FooterRusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
