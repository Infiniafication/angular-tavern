import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROCLASS } from '../hero-class';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    // TODO: Implement selectClass() functionality
    this.getHeroes();
    this.getHeroClasses();
    // Mock hero init
    this.initHero(this.heroes[0],this.classes[0],"",""); // Pass-in Fighter Hero Class
    this.initHero(this.heroes[1],this.classes[2],"",""); // Pass-in Arcanist Hero Class
  }

  heroes: Hero[]
  classes;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  getHeroClasses(): void {
    this.classes = this.heroService.getHeroClasses();
  }
  
  // Initialize hero based on the HEROCLASS
  // Required: heroObject, heroClass
  // Optional: spc, name
  initHero(heroObject, heroClass, spc, name): void {
    this.heroService.initHero(heroObject, heroClass, spc, name);
  }

}