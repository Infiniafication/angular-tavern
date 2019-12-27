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
    status: "Incapacitated", // Incapacitated, Weak, Steady, Confident
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
    status: "Incapacitated", // Incapacitated, Weak, Steady, Confident
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
    status: "Incapacitated", // Incapacitated, Weak, Steady, Confident
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
    status: "Incapacitated", // Incapacitated, Weak, Steady, Confident
  };

  classes = heroClass;
  
  // TODO: Implement selectClass()
  // selectClass() {
  //  show list of classes to choose
  // }

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

  // Initialize hero based on the Class
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

  constructor() { }

  ngOnInit() {
    // TODO: Implement selectClass() functionality
    // Static hero init
    this.initHero(this.hero1,this.classes[0],"",""); // Pass-in Fighter
    this.initHero(this.hero2,this.classes[2],"",""); // Pass-in Arcanist
  }

}