import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import * as pages from 'src/app/pages/index';

@Component({
  selector: 'app-root',
  template: `
            <ion-app>
                <ion-router-outlet></ion-router-outlet>
           </ion-app>
          `,
})
export class AppComponent
{
  constructor() { }
}

@NgModule({
  declarations: [
    AppComponent,
    pages.layouts,
    pages.EpisodesComponent,
    pages.LeitnerListComponent,
    pages.QuotesComponent,
    pages.SeasonDetailsComponent,
    pages.SeasonsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
