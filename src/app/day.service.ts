import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TavernService } from './tavern.service';

@Injectable()
export class DayService {

  constructor( private tavernService: TavernService ) { }
  
  day: number;

  getDay(): Observable<number> {
    return of(this.day);
  }

  incrementDay(): void {
    this.day++;
  }

  endDay() {
    this.incrementDay();
    this.tavernService.refreshActionPoints();
    this.tavernService.calculateIncome();
    this.tavernService.calculateUpkeep();
    this.tavernService.incomeTick();
    this.tavernService.foodUpkeepTick();
  }
}