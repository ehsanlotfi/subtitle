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
    _pages.SeasonsComponent,
    _pages.LayoutComponent,
    _pages.EpisodesComponent,
    _pages.SplashComponent,
    _pages.QuotesComponent,
    _pages.AboutUsComponent,
    _pages.HeaderComponent
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

