import { Component, OnInit } from '@angular/core';
import { Card } from './cards.model';
import { DataService } from './data.service';
import { watch_compare } from './watch-comparison';

@Component({
  selector: 'apple-watch',
  templateUrl: './watch.component.html'
})
export class WatchComponent implements OnInit {
  cards: Card [] = [];

  constructor (private dataService: DataService){

  }

  ngOnInit(): void {
   
    this.display();
  }

      
  display()
  {
    this.dataService.getWatch().subscribe((data: Card) =>
    {
        console.log(data);
     
    })

  }

}