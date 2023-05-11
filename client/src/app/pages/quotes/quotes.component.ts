import { Component, OnInit } from '@angular/core';
import * as _svc from 'src/app/services';
import * as _mod from 'src/app/models';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes: _mod.Quote[] = [];
  pinnedQuotes: _mod.Quote[] = [];

  constructor(private globalService: _svc.GlobalService,) { }

  ngOnInit(): void {
    //  this.quotes = this.quotesService.getQuotes();
  }

  onPin(quote: _mod.Quote) {
    this.pinnedQuotes.push(quote);
  }

}