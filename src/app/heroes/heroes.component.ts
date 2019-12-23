import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroClass } from '../hero-class';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
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

  classes = heroClass;
  
  // TODO: Implement selectClass()
  // selectClass() {
  //  show list of classes to choose
  // }

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
    heroObject.curFatigue = heroClass.fatigue;

    if(spc)
    {
      heroObject.spc = spc;
      // heroObject.maxHealth = heroClass.health + heroSpc.health;
      // heroObject.maxArcana = heroClass.arcana + heroSpc.arcana;
      // heroObject.maxFatigue = heroClass.fatigue + heroSpc.fatigue;
      // heroObject.curHealth = heroClass.health + heroSpc.health;
      // heroObject.curArcana = heroClass.arcana + heroSpc.arcana;
      // heroObject.curFatigue = heroClass.fatigue + heroSpc.fatigue;
    }
    else
    {
      heroObject.level = 1;
    }

  }

  constructor() { }

  ngOnInit() {
    // TODO: Implement selectClass() functionality
    // Static hero init
    this.initHero(this.hero1,this.classes[0],"",""); // Pass-in Fighter
    this.initHero(this.hero2,this.classes[2],"",""); // Pass-in Arcanist
  }

}