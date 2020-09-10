import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMePageComponent} from './about-me-page/about-me-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {CollectionPageComponent} from './collection-page/collection-page.component';
import {IllustrationsPageComponent} from './illustrations-page/illustrations-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'about', component: AboutMePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'collection', component: CollectionPageComponent},
  { path: 'illustrations', component: IllustrationsPageComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
