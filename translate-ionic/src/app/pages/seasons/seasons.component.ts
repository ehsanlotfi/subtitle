import { Component, OnInit } from '@angular/core';
import * as _svc from 'src/app/services';
import * as _mod from 'src/app/models';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html'
})
export class SeasonsComponent implements OnInit
{

  seasons: _mod.Season[] = [];

  constructor(private globalService: _svc.GlobalService,) { }

  ngOnInit(): void
  {
    this.seasons = this.globalService.getAllSeasons();
  }

}