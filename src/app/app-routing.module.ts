import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {NengloComponent} from "./nenglo/nenglo.component";
import {ThirtiesComponent} from "./nenglo/thirties/thirties.component";
import {PresentDayComponent} from "./nenglo/present-day/present-day.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'nenglo',
    component: NengloComponent,
    children: [
      {path: 'thirties', component: ThirtiesComponent},
      {path: 'presentDay', component: PresentDayComponent},

    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
