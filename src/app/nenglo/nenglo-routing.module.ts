import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThirtiesComponent} from "./thirties/thirties.component";


const routes: Routes = [
  { path: '', component: ThirtiesComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
