import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {NengloComponent} from "./nenglo/nenglo.component";
import {earlyDaysComponent} from "./nenglo/earlyDays/earlyDays.component";
import {MilitaryComponent} from "./nenglo/military/military.component";
import {PostWarComponent} from "./nenglo/post-war/post-war.component";


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: NengloComponent },  //routing to the /nenglo page rather than the '/' page

  { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  {
    path: 'nenglo',
    component: NengloComponent,
    children: [
      {path: 'earlyDays', component: earlyDaysComponent},
      {path: 'military', component: MilitaryComponent},
      {path: 'post-war', component:PostWarComponent}

    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
