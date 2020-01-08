import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Area } from './area';
import { AREAS } from './mock-areas';
import { TavernService } from './tavern.service';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root',
})

export class HuntService {

  constructor(
    private tavernService: TavernService,
    private heroService: HeroService
  ) { }

  // 2D array to store exploration stats outcome for each active hero
  // stats[HeroID][Health, Fatigue, Arcana]
  // stats: number[]; 
  foodReward: number;

  getAreas(): Observable<Area[]> {
    return of(AREAS);
  }

  // getStats() {
  //   return this.stats;
  // }

  getFoodReward(): Observable<number> {
    return of(this.foodReward);
  }

  explore(idArea): void {
    // this.stats = [0];
    var heroCount = 0;
    heroCount = this.heroService.getActiveHeroes(); // Get number of active & healthy heroes
    for(var counter:number = 0; counter<heroCount; counter++)
    {
      // Do some stats calculation based on active heroes and area difficulty
      this.heroService.battle(counter, AREAS[idArea].actionpoints);
      //this.stats.push(this.heroService.battle(counter, AREAS[idArea].actionpoints));
    }
    this.tavernService.addActionPoints(-(AREAS[idArea].actionpoints)); // Deduct AP
    this.foodReward = this.getRandomInt(AREAS[idArea].actionpoints * 2) // Assuming food is 2x the AP cost
    this.tavernService.addFood(this.foodReward); // Food Reward
  }

  // Returns a random integer with max value as param.
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
