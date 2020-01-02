import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; //TODO: Replace this with proper data storage method
import { heroClass } from './hero-class';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Atlas has joined the party.');
    this.messageService.add('Milo has joined the party.');
    return of(HEROES);
  }

  getHeroClasses(): heroClass[] {
    return heroClass;
  }

  // Determine hero's combat status based on current stats.
  // Required: heroObject
  calcStatus(heroObject) {
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

  // Initialize hero based on the heroClass
  // Required: heroObject, heroClass
  // Optional: spc, name
  initHero(heroObject, heroClass, spc, name) {
    if(name)
    {
      heroObject.name = name;
    }

    heroObject.heroClass = heroClass.name;
    heroObject.maxHealth = heroClass.health;
    heroObject.maxArcana = heroClass.arcana;
    heroObject.maxFatigue = heroClass.fatigue;
    heroObject.curHealth = heroClass.health;
    heroObject.curArcana = heroClass.arcana;
    heroObject.curFatigue = 0;

    if(spc)
    {
      heroObject.spc = spc;
      // TODO: Complete Specialization implementation
      // heroObject.maxHealth = heroClass.health + heroSpc.health;
      // heroObject.maxArcana = heroClass.arcana + heroSpc.arcana;
      // heroObject.maxFatigue = heroClass.fatigue + heroSpc.fatigue;
      // heroObject.curHealth = heroClass.health + heroSpc.health;
      // heroObject.curArcana = heroClass.arcana + heroSpc.arcana;
      // heroObject.curFatigue = 0;
    }
    else
    {
      heroObject.level = 1;
    }

    this.calcStatus(heroObject);
  }
  
  // TODO: Implement selectClass()
  // selectClass() {
  //  show list of classes to choose
  // }

}
