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
import { ThirtiesComponent } from './nenglo/thirties/thirties.component';
import { YearlyNavComponent } from './nenglo/yearly-nav/yearly-nav.component';
import { FortiesComponent } from './nenglo/forties/forties.component';
import { FiftiesComponent } from './nenglo/fifties/fifties.component';
import { SixtiesComponent } from './nenglo/sixties/sixties.component';
import { SeventiesComponent } from './nenglo/seventies/seventies.component';
import { EightiesComponent } from './nenglo/eighties/eighties.component';
import { NinetiesComponent } from './nenglo/nineties/nineties.component';
import { PresentDayComponent } from './nenglo/present-day/present-day.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    NengloComponent,
    ContactComponent,
    ThirtiesComponent,
    YearlyNavComponent,
    FortiesComponent,
    FiftiesComponent,
    SixtiesComponent,
    SeventiesComponent,
    EightiesComponent,
    NinetiesComponent,
    PresentDayComponent,

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
