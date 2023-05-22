import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as _pages from 'src/app/pages';
import { SQLiteService } from './services/sqlite.service';
import { InitializeAppService } from './services/initialize.app.service';

export function initializeFactory(init: InitializeAppService)
{
  return () => init.initializeApp();
}

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
  providers: [
    SQLiteService,
    InitializeAppService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

