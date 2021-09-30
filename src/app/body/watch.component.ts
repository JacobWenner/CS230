import { Component, OnInit } from '@angular/core';
import { Card } from './cards.model';
import { watch_compare } from './watch-comparison';

@Component({
  selector: 'apple-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  cards: Card [] = [];

  ngOnInit(): void {

    for (var cards of watch_compare){
      this.cards.push(new Card(cards))
    }
  }
}
