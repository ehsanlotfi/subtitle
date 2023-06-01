import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import * as pages from 'src/app/pages/index';

const routes: Routes = [
  {
    path: '', component: pages.layouts, children: [
      { path: '', component: pages.SeasonsComponent },
      { path: ':seasonId/detail', component: pages.SeasonDetailsComponent },
      { path: ':seasonId/episods', component: pages.EpisodesComponent },
      { path: ':seasonId/episods/:episodeId', component: pages.QuotesComponent }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
