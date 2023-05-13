import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _svc from 'src/app/services';
import * as _mod from 'src/app/models';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit
{

  title: string = "";
  seasons: _mod.Season[] = [];

  constructor(
    private globalService: _svc.GlobalService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void
  {
    const seasonId = this.route.snapshot.paramMap.get('seasonId');
    this.seasons = this.globalService.getAllEpisode(+seasonId!);
    this.title = `فصل ${this.seasons[0].season}`;
    //  this.episodes = this.globalService.getEpisodes(seasonId!);
  }

  back() {
    this.router.navigate(['/app']);
  }

}