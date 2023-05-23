import { Injectable } from '@angular/core';
import * as _mod from 'src/app/models';
import { Capacitor } from '@capacitor/core';
import { SQLiteService } from './sqlite.service';
import { Observable, of } from 'rxjs';
import { fakeData } from './fake-data';
import { seasonsData } from './season.data';

@Injectable({
  providedIn: 'root'
})
export class GlobalService
{

  seasons = seasonsData;

  constructor(private readonly _sqlite: SQLiteService) { }

  getAllSeasons(): _mod.Season[]
  {
    return this.seasons.map(({ episodes, ...rest }) => rest);
  }

  getAllEpisode(seasonId: number): _mod.Season[]
  {
    return this.seasons.filter(f => f.number == seasonId);
  }

  getAllQuote(seasonId: number, episodeId: number): Observable<_mod.Quote[]>
  {
    if (Capacitor.isNativePlatform())
    {
      return this._sqlite.queryObservable<_mod.Quote>(`SELECT  * FROM Translates Where Season = ${seasonId} AND Capture = ${episodeId}`);
    } else
    {
      return of(fakeData);
    }

  }



}