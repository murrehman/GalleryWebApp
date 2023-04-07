import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'buy-products', component: ParentComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent, },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'television', component: TelevisionComponent },
      { path: 'washing-machine', component: WashingMachineComponent }
    ]
  },

  // part of ex 2
  // {
  //   path: 'gallery', children: [
  //     { path: '', component: GalleryComponent },
  //     { path: 'laptop', component: LaptopComponent },
  //     { path: 'mobile', component: MobileComponent },
  //     { path: 'television', component: TelevisionComponent },
  //     { path: 'washing-machine', component: WashingMachineComponent }
  //   ]
  // }

  //part of ex 3
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: GalleryItemComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
