import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tavern-stat',
  templateUrl: './tavern-stat.component.html',
  styleUrls: ['./tavern-stat.component.css']
})
export class TavernStatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.calculateIncome();
    this.calculateUpkeep();
  }
  
  gold = 50;
  food = 30;
  popularity = 1;
  patronWealth = 2;
  goldIncome = 0;
  foodUpkeep = 0;

  calculateIncome() {
    this.goldIncome = this.popularity * this.patronWealth;
  }

  calculateUpkeep() {
    this.foodUpkeep = this.popularity * (3 * this.patronWealth);
  }

}