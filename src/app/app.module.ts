import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContainerComponent } from './container/container.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { HomeComponent } from './home/home.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryItems } from './appModels/GalleryItems';

// const appRoutes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
// { path: 'gallery', component: GalleryComponent },
// { path: 'home', component: HomeComponent },
// { path: 'login', component: LoginComponent },
// { path: 'buy-products', component: ParentComponent },
// { path: 'about', component: AboutComponent },
// { path: 'contactus', component: ContactusComponent },
// {
//   path: 'products', children: [
//     { path: '', component: ProductsComponent, },
//     { path: 'laptop', component: LaptopComponent },
//     { path: 'mobile', component: MobileComponent },
//     { path: 'television', component: TelevisionComponent },
//     { path: 'washing-machine', component: WashingMachineComponent }
//   ]
// },
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
//   { path: 'gallery', component: GalleryComponent },
//   { path: 'gallery/1', component: GalleryItemComponent }

// ]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    ProductsComponent,
    GalleryComponent,
    WashingMachineComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    LoginComponent,
    ContactusComponent,
    HomeComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GalleryItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
