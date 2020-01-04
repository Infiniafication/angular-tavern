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
    Tavern.goldIncome = Tavern.popularity * Tavern.patronWealth;
  }

  // Calculate Tavern Food Upkeep
  calculateUpkeep(): void {
    Tavern.foodUpkeep = Tavern.popularity * (3 * Tavern.patronWealth);
  }

}