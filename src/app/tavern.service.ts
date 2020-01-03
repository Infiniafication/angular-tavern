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

  tavern: Tavern;
  
  // Calculate Tavern Gold Income
  calculateIncome(): void {
    this.tavern.goldIncome = this.tavern.popularity * this.tavern.patronWealth;
  }

  // Calculate Tavern Food Upkeep
  calculateUpkeep(): void {
    this.tavern.foodUpkeep = this.tavern.popularity * (3 * this.tavern.patronWealth);
  }

}