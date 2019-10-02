import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {NengloComponent} from "./nenglo/nenglo.component";
import {earlyDaysComponent} from "./nenglo/earlyDays/earlyDays.component";
import {MilitaryComponent} from "./nenglo/military/military.component";
import {PostWarComponent} from "./nenglo/post-war/post-war.component";
import {WhoWeAreComponent} from "./about/who-we-are/who-we-are.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {GalleryErrorPageComponent} from "./gallery/gallery-error-page/gallery-error-page.component";


const routes: Routes = [
  // { path: '', component: HomeComponent },
  {path: '', component: NengloComponent},  //routing to the /nenglo page rather than the '/' page
  {path: 'gallery', component: GalleryComponent,
    children: [
      {path: 'gallery-error-page', component: GalleryErrorPageComponent}
    ]
  },  //routing to the /nenglo page rather than the '/' page

  {
    path: 'about', component: AboutComponent,
    children: [
      {path: 'who-we-are', component: WhoWeAreComponent}
    ]

  },

  // { path: 'contact', component: ContactComponent },
  {
    path: 'nenglo', component: NengloComponent,
    children: [
      {path: 'earlyDays', component: earlyDaysComponent},
      {path: 'military', component: MilitaryComponent},
      {path: 'post-war', component: PostWarComponent}

    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
