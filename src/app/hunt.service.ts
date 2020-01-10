import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Area } from './area';
import { AREAS } from './mock-areas';
import { TavernService } from './tavern.service';
import { HeroService } from './hero.service';
import { Stats } from './stats';

@Injectable({
  providedIn: 'root',
})

export class HuntService {

  constructor(
    private tavernService: TavernService,
    private heroService: HeroService
  ) { }

  partyStats: Stats[]; 
  foodReward: number;

  getAreas(): Observable<Area[]> {
    return of(AREAS);
  }

  getStats(): Stats[] {
    return this.partyStats;
  }

  getFoodReward(): Observable<number> {
    return of(this.foodReward);
  }

  explore(idArea): boolean {
    var valid: boolean = false;
    this.partyStats = [];
    var heroCount: number = this.heroService.getActiveHeroes(); // Get number of active & healthy heroes
    valid = this.tavernService.addActionPoints(-(AREAS[idArea].actionpoints)); // Deduct AP
    valid = valid && (heroCount>0); // If either is false, return false

    if(valid)
    { 
      for(var counter:number = 0; counter<heroCount; counter++)
      {
        // Do some stats calculation based on active heroes and area difficulty
        this.partyStats.push(this.heroService.battle(counter, AREAS[idArea].actionpoints));
      }
      
      this.foodReward = this.getRandomInt(AREAS[idArea].actionpoints * 4) // Assuming food is 4x the AP cost
      this.tavernService.addFood(this.foodReward); // Food Reward
    }

    return valid;
  }

  // Returns a random integer with max value as param.
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
