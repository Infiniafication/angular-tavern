import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroClass } from '../hero-class';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  hero1: Hero = { 
    id: 1, // 1 to 4
    name: "Atlas",
    level: 0, //1 to 30
    heroClass: "",
    spc: "", //Class Specialization
    maxHealth: 0,
    maxArcana: 0,
    maxFatigue: 0,
    curHealth: 0,
    curArcana: 0,
    curFatigue: 0,
  };
  hero2: Hero = {
    id: 2, // 1 to 4
    name: "Milo",
    level: 0, //1 to 30
    heroClass: "",
    spc: "", //Class Specialization
    maxHealth: 0,
    maxArcana: 0,
    maxFatigue: 0,
    curHealth: 0,
    curArcana: 0,
    curFatigue: 0,
  };
  hero3: Hero = { 
    id: 3, // 1 to 4
    name: "",
    level: 0, //1 to 30
    heroClass: "",
    spc: "", //Class Specialization
    maxHealth: 0,
    maxArcana: 0,
    maxFatigue: 0,
    curHealth: 0,
    curArcana: 0,
    curFatigue: 0,
  };
  hero4: Hero = {
    id: 4, // 1 to 4
    name: "",
    level: 0, //1 to 30
    heroClass: "",
    spc: "", //Class Specialization
    maxHealth: 0,
    maxArcana: 0,
    maxFatigue: 0,
    curHealth: 0,
    curArcana: 0,
    curFatigue: 0,
  };

  selectClass() {
    
  }

  initHero(id, heroClass, spc, name) {
    if(id==1)
    {
      if(name)
      {
        this.hero1.name = name;
      }

      this.hero1.heroClass = heroClass;
      this.hero1.maxHealth = heroClass.health;
      this.hero1.maxArcana = heroClass.arcana;
      this.hero1.maxFatigue = heroClass.fatigue;
      this.hero1.curHealth = heroClass.health;
      this.hero1.curArcana = heroClass.arcana;
      this.hero1.curFatigue = heroClass.fatigue;

      if(spc)
      {
        this.hero1.spc = spc;
        // this.hero1.maxHealth = heroClass.health + heroSpc.health;
        // this.hero1.maxArcana = heroClass.arcana + heroSpc.arcana;
        // this.hero1.maxFatigue = heroClass.fatigue + heroSpc.fatigue;
        // this.hero1.curHealth = heroClass.health + heroSpc.health;
        // this.hero1.curArcana = heroClass.arcana + heroSpc.arcana;
        // this.hero1.curFatigue = heroClass.fatigue + heroSpc.fatigue;
      }
      else
      {
        this.hero1.level = 1;
      }

    }

  }

}