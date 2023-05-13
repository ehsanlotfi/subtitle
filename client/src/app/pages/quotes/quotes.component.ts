import { Component, OnInit } from '@angular/core';
import * as _svc from 'src/app/services';
import * as _mod from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit
{

  seasonId: number;
  episodeId: number;

  title: string = "";
  quotes: _mod.Quote[] = [];

  constructor(
    private globalService: _svc.GlobalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.seasonId = +this.route.snapshot.paramMap.get('seasonId')!;
    this.episodeId = +this.route.snapshot.paramMap.get('episodeId')!;
    this.title = `فصل ${this.seasonId} قسمت ${this.episodeId}`;
    this.getData();
  }

  getData()
  {
    this.quotes = this.globalService.getAllQuote(this.seasonId, this.episodeId);
  }

  back()
  {
    this.router.navigate(['/app', this.seasonId]);
  }


}