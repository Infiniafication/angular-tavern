import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Area } from './area';
import { AREAS } from './mock-areas';
import { TavernService } from './tavern.service';

@Injectable({
  providedIn: 'root',
})

export class HuntService {

  constructor(private tavernService: TavernService) { }

  getAreas(): Observable<Area[]> {
    return of(AREAS);
  }

  explore(idArea): void {
    this.tavernService.addActionPoints(-(AREAS[idArea].actionpoints)); // Deduct AP
    this.tavernService.addFood(this.getRandomInt(AREAS[idArea].actionpoints * 2)); // Add Food Reward
  }

  // Returns a random integer with max value as param.
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
