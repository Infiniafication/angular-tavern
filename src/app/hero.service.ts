import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; //TODO: Replace this with proper data storage method
import { HEROCLASS } from './hero-class';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHeroClasses() {
    return HEROCLASS;
  }

  // Determine hero's combat status based on current stats.
  // Required: heroObject
  calcStatus(heroObject): void {
    var statusFactor = 0;

    if(heroObject.curHealth == 0)
    {
      heroObject.status = "Incapacitated";
      return;
    }
    else if(heroObject.maxArcana > 0)
    {
      statusFactor = ( (heroObject.curArcana / heroObject.maxArcana) + (heroObject.curHealth / heroObject.maxHealth) + (1- heroObject.curFatigue / heroObject.maxFatigue) ) / 3;
    }
    else
    {
      statusFactor = ( (heroObject.curHealth / heroObject.maxHealth) + (1 - heroObject.curFatigue / heroObject.maxFatigue) ) / 2;
    }

    if (statusFactor >= 0.65) 
    { 
      heroObject.status = "Confident";
      return;
    }
    else if(statusFactor >= 0.4) 
    { 
      heroObject.status = "Steady";
      return;
    }
    else if(statusFactor > 0) 
    { 
      heroObject.status = "Weak";
      return;
    }
    else 
    { 
      heroObject.status = "Incapacitated";
      return;
    }

  }

  // Initialize hero based on the HEROCLASS
  // Required: heroObject, HEROCLASS
  // Optional: spc, name
  initHero(heroObject, HEROCLASS, spc, name): void {
    if(name)
    {
      heroObject.name = name;
    }

    heroObject.HEROCLASS = HEROCLASS.name;
    heroObject.maxHealth = HEROCLASS.health;
    heroObject.maxArcana = HEROCLASS.arcana;
    heroObject.maxFatigue = HEROCLASS.fatigue;
    heroObject.curHealth = HEROCLASS.health;
    heroObject.curArcana = HEROCLASS.arcana;
    heroObject.curFatigue = 0;

    if(spc)
    {
      heroObject.spc = spc;
      // TODO: Complete Specialization implementation
      // heroObject.maxHealth = HEROCLASS.health + heroSpc.health;
      // heroObject.maxArcana = HEROCLASS.arcana + heroSpc.arcana;
      // heroObject.maxFatigue = HEROCLASS.fatigue + heroSpc.fatigue;
      // heroObject.curHealth = HEROCLASS.health + heroSpc.health;
      // heroObject.curArcana = HEROCLASS.arcana + heroSpc.arcana;
      // heroObject.curFatigue = 0;
    }
    else
    {
      heroObject.level = 1;
    }

    this.calcStatus(heroObject);
    this.messageService.add(heroObject.name + ' has joined the party.');
  }
  
  // TODO: Implement selectClass()
  // selectClass() {
  //  show list of classes to choose
  // }

}
