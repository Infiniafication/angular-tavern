import { Component, OnInit } from '@angular/core';
import { Tavern } from '../tavern';
import { TavernService } from '../tavern.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(private tavernService: TavernService) { }

  ngOnInit() {
    this.getTavernStats();
  }

  tavern: Tavern;

  getTavernStats(): void {
    this.tavernService.getTavernStats().subscribe(tavern => this.tavern = tavern);
  }

}