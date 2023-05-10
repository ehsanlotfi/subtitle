import { Component, OnInit } from '@angular/core';
import * as _svc from 'src/app/services';
import * as _mod from 'src/app/models';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  seasons: _mod.Season[] = [];

  constructor(private seasonsService: _svc.SeasonsService) { }

  ngOnInit(): void {
    this.seasons = this.seasonsService.getSeasons();
  }

}