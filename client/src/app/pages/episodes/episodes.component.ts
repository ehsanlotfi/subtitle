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

  episodes: _mod.Episode[] = [];

  constructor(
    private episodesService: _svc.EpisodesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const seasonId = this.route.snapshot.paramMap.get('id');
    this.episodes = this.episodesService.getEpisodes(seasonId!);
  }

}