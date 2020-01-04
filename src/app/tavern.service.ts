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

}