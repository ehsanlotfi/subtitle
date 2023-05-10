import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as _pages from 'src/app/pages';


const routes: Routes = [
  { path: '', component: _pages.SplashComponent },
  { path: 'home', component: _pages.HomeComponent },
  { path: 'seasons', component: _pages.SeasonsComponent },
  { path: 'seasons/:id/episodes', component: _pages.EpisodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }