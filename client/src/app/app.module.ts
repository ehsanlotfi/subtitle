import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as _pages from 'src/app/pages';

@NgModule({
  declarations: [
    AppComponent,
    _pages.HomeComponent,
    _pages.SeasonsComponent,
    _pages.EpisodesComponent,
    _pages.QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }