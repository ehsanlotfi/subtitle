import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _svc from 'src/app/services';
import * as _mod from 'src/app/models';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  seasons: _mod.Season[] = [];

  constructor(
    private globalService: _svc.GlobalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const seasonId = this.route.snapshot.paramMap.get('seasonId');
    this.seasons = this.globalService.getAllEpisode(+seasonId!);
    debugger
    //  this.episodes = this.globalService.getEpisodes(seasonId!);
  }

}