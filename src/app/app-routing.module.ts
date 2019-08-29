import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {NengloComponent} from "./nenglo/nenglo.component";
import {ThirtiesComponent} from "./nenglo/thirties/thirties.component";
import {FortiesComponent} from "./nenglo/forties/forties.component";
import {FiftiesComponent} from "./nenglo/fifties/fifties.component";
import {SixtiesComponent} from "./nenglo/sixties/sixties.component";
import {SeventiesComponent} from "./nenglo/seventies/seventies.component";
import {NinetiesComponent} from "./nenglo/nineties/nineties.component";
import {EightiesComponent} from "./nenglo/eighties/eighties.component";
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
      {path: 'forties', component: FortiesComponent},
      {path: 'fifties', component: FiftiesComponent},
      {path: 'sixties', component: SixtiesComponent},
      {path: 'seventies', component: SeventiesComponent},
      {path: 'eighties', component: EightiesComponent},
      {path: 'nineties', component: NinetiesComponent},
      {path: 'presentDay', component: PresentDayComponent},

    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
