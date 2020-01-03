import { Component, OnInit } from '@angular/core';
import { Tavern } from '../tavern';
import { TavernService } from '../tavern.service';

@Component({
  selector: 'app-tavern-stat',
  templateUrl: './tavern-stat.component.html',
  styleUrls: ['./tavern-stat.component.css']
})
export class TavernStatComponent implements OnInit {

  constructor(private tavernService: TavernService) { }

  ngOnInit() {
    this.getTavernStats();
    this.calculateIncome();
    this.calculateUpkeep();
  }

  tavern: Tavern;

  getTavernStats(): void {
    this.tavernService.getTavernStats().subscribe(tavern => this.tavern = tavern);
  }

  calculateIncome(): void {
    this.tavernService.calculateIncome();
  }

  calculateUpkeep(): void {
    this.tavernService.calculateUpkeep();
  }

}