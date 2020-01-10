import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tavern } from './tavern';
import { TAVERNSTATS } from './mock-tavern-stats'; //TODO: Replace this with proper data storage method
import { Upgrade } from './upgrade';
import { UPGRADES } from './mock-upgrades'; //TODO: Replace this with proper data storage method
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class TavernService {

  constructor( private messageService: MessageService, ) { }

  getTavernStats(): Observable<Tavern> {
    return of(TAVERNSTATS);
  }

  getUpgrades(): Observable<Upgrade> {
    return of(UPGRADES);
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

  addPopularity(popularity: number): void {
    TAVERNSTATS.popularity += popularity;
  }

  addPatronWealth(patronWealth: number): void {
    TAVERNSTATS.patronWealth += patronWealth;
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

  purchaseUpgrade(id: number): void {
    if(id>0)
    {
      id--; // Decrement to match zero-based array index
      if(!UPGRADES[id].obtained)
      {
        if(TAVERNSTATS.gold>=UPGRADES[id].goldCost)
        {
          this.addGold(-UPGRADES[id].goldCost);
          this.addPopularity(UPGRADES[id].popularity);
          this.addPopularity(UPGRADES[id].wealth);
          UPGRADES[id].obtained = true;

          this.calculateIncome();
          this.calculateUpkeep();

          this.messageService.add("'" + UPGRADES[id].name + "' successfully purchased.");
          return;
        }
        else
        {
          this.messageService.add("Could not purchase upgrade due to insufficient gold.");
          return;
        }
      }
      else
      {
        this.messageService.add("Upgrade already owned.");
        return;
      }
    }
    this.messageService.add("Could not upgrade. Please try again.");
  }

}