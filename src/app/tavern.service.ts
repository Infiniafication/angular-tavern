import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tavern } from './tavern';
import { TAVERNSTATS } from './mock-tavern-stats'; //TODO: Replace this with proper data storage method

@Injectable({
  providedIn: 'root',
})

export class TavernService {

  constructor() { }

  getTavernStats(): Observable<Tavern> {
    return of(TAVERNSTATS);
  }
  
  // Calculate Tavern Gold Income
  calculateIncome(): void {
    TAVERNSTATS.goldIncome = TAVERNSTATS.popularity * TAVERNSTATS.patronWealth; // TODO: refactor
  }

  // Calculate Tavern Food Upkeep
  calculateUpkeep(): void {
    TAVERNSTATS.foodUpkeep = TAVERNSTATS.popularity * (3 * TAVERNSTATS.patronWealth); // TODO: refactor
  }

  incomeTick(): void {
    this.addGold(TAVERNSTATS.goldIncome);
  }

  foodUpkeepTick(): void {
    this.addFood(-TAVERNSTATS.foodUpkeep);
  }

  addGold(gold: number): void {
    TAVERNSTATS.gold += gold;
  }

  addFood(food: number): void {
    TAVERNSTATS.food += food;
  }

  addActionPoints(AP: number): boolean {
    if(TAVERNSTATS.actionPoints + AP < 0)
      return false;
    
    TAVERNSTATS.actionPoints += AP;
    return true;
  }

  refreshActionPoints(): void {
    TAVERNSTATS.actionPoints = 10; // TODO: Move this into data storage
  }

}