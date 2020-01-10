import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TavernService } from './tavern.service';
import { HeroService } from './hero.service';

@Injectable()
export class DayService {

  constructor( 
    private tavernService: TavernService,
    private heroService: HeroService,
  ) { }
  
  // day: number;
  day = new BehaviorSubject(1);

  getDay(): BehaviorSubject<number> {
    return this.day;
  }

  incrementDay(): void {
    var num: number = this.day.value;
    this.day.next(++num);
  }

  endDay() {
    this.incrementDay();
    this.tavernService.refreshActionPoints();
    this.tavernService.calculateIncome();
    this.tavernService.calculateUpkeep();
    this.tavernService.incomeTick();
    this.tavernService.foodUpkeepTick();
    this.heroService.recuperateParty();
  }
}