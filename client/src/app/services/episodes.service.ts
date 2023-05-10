import { Injectable } from '@angular/core';
import * as _mod  from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private episodes: _mod.Episode[] = [
    { id: 1, seasonId: 1, title: 'The One Where Monica Gets a Roommate' },
    { id: 2, seasonId: 1, title: 'The One with the Sonogram at the End' },
    { id: 3, seasonId: 1, title: 'The One with the Thumb' },
    { id: 4, seasonId: 2, title: 'The One with Ross\'s New Girlfriend' },
    { id: 5, seasonId: 2, title: 'The One with the Breast Milk' },
    { id: 6, seasonId: 2, title: 'The One Where Heckles Dies' },
    { id: 7, seasonId: 3, title: 'The One with the Princess Leia Fantasy' },
    { id: 8, seasonId: 3, title: 'The One with the Football' },
    { id: 9, seasonId: 3, title: 'The One with the Screamer' },
    { id: 10, seasonId: 4, title: 'The One with the Jellyfish' },
    { id: 11, seasonId: 4, title: 'The One with Chandler in a Box' },
    { id: 12, seasonId: 4, title: 'The One with Ross\'s Wedding' },
    { id: 13, seasonId: 5, title: 'The One After Ross Says Rachel' },
    { id: 14, seasonId: 5, title: 'The One with All the Kissing' },
    { id: 15, seasonId: 5, title: 'The One Hundredth' },
    { id: 16, seasonId: 6, title: 'The One After Vegas' },
    { id: 17, seasonId: 6, title: 'The One Where Ross Hugs Rachel' },
    { id: 18, seasonId: 6, title: 'The One with Ross\'s Denial' },
    { id: 19, seasonId: 7, title: 'The One with Monica and Chandler\'s Wedding' },
    { id: 20, seasonId: 7, title: 'The One with Monica\'s Thunder' },
    { id: 21, seasonId: 7, title: 'The One with Rachel\'s Book' },
    { id: 22, seasonId: 8, title: 'The One with the Videotape' },
    { id: 23, seasonId: 8, title: 'The One with Rachel\'s Date' },
    { id: 24, seasonId: 8, title: 'The One Where Rachel Has a Baby: Part 2' },
    { id: 25, seasonId: 9, title: 'The One with the Lottery' },
    { id: 26, seasonId: 9, title: 'The One with Rachel\'s Dream' },
    { id: 27, seasonId: 9, title: 'The One Where Monica Sings' },
    { id: 28, seasonId: 10, title: 'The One After Joey and Rachel Kiss' },
    { id: 29, seasonId: 10, title: 'The One Where Ross Is Fine' },
    { id: 30, seasonId: 10, title: 'The Last One: Part 1' },
    { id: 31, seasonId: 10, title: 'The Last One: Part 2' }
  ];

  constructor() { }

  getEpisodes(seasonId: string): _mod.Episode[] {
    return this.episodes;
  }

}