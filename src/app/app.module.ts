import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material";
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NengloComponent } from './nenglo/nenglo.component';
import { ContactComponent } from './contact/contact.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material";
import { earlyDaysComponent } from './nenglo/earlyDays/earlyDays.component';
import { YearlyNavComponent } from './nenglo/yearly-nav/yearly-nav.component';
import {MilitaryComponent} from './nenglo/military/military.component';
import { HomeNavComponent } from './nenglo/home-nav/home-nav.component';
import { PostWarComponent } from './nenglo/post-war/post-war.component';
import { BlackBarNavComponent} from './about/black-bar-nav/black-bar-nav.component';
import { WhoWeAreComponent } from './about/who-we-are/who-we-are.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlackBarGalleryComponent } from './gallery/black-bar-gallery/black-bar-gallery.component';
import { GalleryErrorPageComponent } from './gallery/gallery-error-page/gallery-error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    NengloComponent,
    ContactComponent,
    earlyDaysComponent,
    YearlyNavComponent,
    MilitaryComponent,
    HomeNavComponent,
    PostWarComponent,
    BlackBarNavComponent,
    WhoWeAreComponent,
    GalleryComponent,
    BlackBarGalleryComponent,
    GalleryErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
