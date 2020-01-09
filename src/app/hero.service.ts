import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; //TODO: Replace this with proper data storage method
import { HeroClass } from './hero-class';
import { HEROCLASSES } from './mock-hero-classes';
import { MessageService } from './message.service';
import { Stats } from './stats';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHeroClasses(): Observable<HeroClass[]> {
    return of(HEROCLASSES);
  }

  getActiveHeroes(): number {
    var count = 0;
    for (let hero of HEROES) 
    {
      if(hero.level>0 && hero.curHealth>0) // TODO: Fix bug with 0 Health hero in relation to hero array ID
        count++;
    }
    return count;
  }

  // Determine hero's combat status based on current stats.
  // Required: heroObject
  calcStatus(heroObject: Hero): void {
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
  initHero(heroObject: Hero, heroClass: HeroClass, spc, name: string): void {
    if(name)
    {
      heroObject.name = name;
    }

    heroObject.heroClass = heroClass.name;
    heroObject.maxHealth = heroClass.health;
    heroObject.maxArcana = heroClass.arcana;
    heroObject.maxFatigue = heroClass.fatigue;
    heroObject.maxExp = 10;
    heroObject.curHealth = heroClass.health;
    heroObject.curArcana = heroClass.arcana;
    heroObject.curFatigue = 0;
    heroObject.curExp = 0;

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
    this.messageService.add(heroObject.name + ' has joined the party.');
  }

  // Calculates battle outcome based on difficulty
  battle(id: number, difficulty: number): Stats {
    var healthMultiplier: number;
    var fatigueMultiplier: number;
    var arcanaMultiplier: number;
    var stats: Stats = { health: 0, fatigue: 0, arcana: 0, exp: 0 };

    // TODO: Refactor
    // Difficulty details should be stored as data and imported but will be hardcoded for now.
    // Current difficulty is determined by Action Points (less AP = easier).
    if(difficulty <= 2) // easy difficulty
    {
      if(HEROES[id].maxArcana>0) // different calculation for arcana heroes
      {
        healthMultiplier = 8;
        fatigueMultiplier = 5;
        arcanaMultiplier = 17;
      }
      else
      {
        healthMultiplier = 30;
        fatigueMultiplier = 25;
        arcanaMultiplier = 0;
      }
    }
    else if(difficulty > 2 && difficulty <= 5) // average difficulty
    {
      if(HEROES[id].maxArcana>0) // different calculation for arcana heroes
      {
        healthMultiplier = 18;
        fatigueMultiplier = 14;
        arcanaMultiplier = 33;
      }
      else
      {
        healthMultiplier = 35;
        fatigueMultiplier = 30;
        arcanaMultiplier = 0;
      }
    }
    else if(difficulty >=5) // hard difficulty
    {
      if(HEROES[id].maxArcana>0) // different calculation for arcana heroes
      {
        healthMultiplier = 30;
        fatigueMultiplier = 25;
        arcanaMultiplier = 45;
      }
      else
      {
        healthMultiplier = 45;
        fatigueMultiplier = 55;
        arcanaMultiplier = 0;
      }
    }

    stats.health = -this.getRandomInt(healthMultiplier);
    stats.fatigue = fatigueMultiplier;
    stats.arcana = -this.getRandomInt(arcanaMultiplier);
    stats.exp = this.getRandomInt(difficulty*5) + 1;
    this.addStats(id, stats);
    
    return stats;
  }

  // Add stats based on parameters and returns the values of [Health, Fatigue, Arcana]
  addStats(id: number, stats: Stats): void {
    // TODO: Refactor?
    HEROES[id].curHealth += stats.health;
    HEROES[id].curFatigue += stats.fatigue;
    HEROES[id].curArcana += stats.arcana;
    HEROES[id].curExp += stats.exp;

    // Ensure stats are within valid range
    if(HEROES[id].curHealth > HEROES[id].maxHealth)
      HEROES[id].curHealth = HEROES[id].maxHealth;

    if(HEROES[id].curFatigue > HEROES[id].maxFatigue)
      HEROES[id].curFatigue = HEROES[id].maxFatigue;
    
    if(HEROES[id].curArcana > HEROES[id].maxArcana)
      HEROES[id].curArcana = HEROES[id].maxArcana;

    if(HEROES[id].curHealth < 0)
      HEROES[id].curHealth = 0;

    if(HEROES[id].curFatigue < 0)
      HEROES[id].curFatigue = 0;
    
    if(HEROES[id].curArcana < 0)
      HEROES[id].curArcana = 0;
    
    if(HEROES[id].curExp > HEROES[id].maxExp)
      this.levelUp(HEROES[id]);

    this.calcStatus(HEROES[id]);

  }

  // Hero level-up with HeroObject as required parameter.
  levelUp(heroObject: Hero): boolean {
    for(let heroClass of HEROCLASSES)
    {
      if (heroClass.name == heroObject.heroClass)
      {
        heroObject.level++;
        heroObject.curExp = 0;
        heroObject.maxExp = Math.ceil(heroObject.maxExp * 1.2); // Hardcode maxExp multiplier to 1.2
        heroObject.maxHealth = Math.ceil(heroObject.maxHealth * heroClass.healthMultiplier);
        heroObject.maxFatigue = Math.ceil(heroObject.maxFatigue * heroClass.fatigueMultiplier);
        heroObject.maxArcana = Math.ceil(heroObject.maxArcana * heroClass.arcanaMultiplier);
        heroObject.curHealth = heroObject.maxHealth;
        heroObject.curFatigue = heroObject.maxFatigue;
        heroObject.curArcana = heroObject.maxArcana;

        this.messageService.add('Congratulations, ' + heroObject.name + ' has leveled up to Level ' + heroObject.level + '!');
        return true;
      }
    }

    return false;
  }
  
  // TODO: Implement selectClass()
  // selectClass() {
  //  show list of classes to choose
  // }

  // Returns a random integer with max value as param.
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
