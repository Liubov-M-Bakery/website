import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ItemGalleryComponent } from './components/item-gallery/item-gallery.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRusComponent } from './components/home-rus/home-rus.component';
import { AboutRusComponent } from './components/about-rus/about-rus.component';
import { ItemGalleryRusComponent } from './components/item-gallery-rus/item-gallery-rus.component';
import { ItemDetailsRusComponent } from './components/item-details-rus/item-details-rus.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'item-details/:id' , component: ItemDetailsComponent},
  { path: 'item-gallery' , component: ItemGalleryComponent},
  { path: 'about' , component: AboutComponent},

  // Russian
  { path: 'home-rus', component: HomeRusComponent},
  { path: 'item-details-rus/:id' , component: ItemDetailsRusComponent},
  { path: 'item-gallery-rus' , component: ItemGalleryRusComponent},
  { path: 'about-rus' , component: AboutRusComponent},

  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
