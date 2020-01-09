import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Area } from '../area';
import { HuntService } from '../hunt.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Stats } from '../stats';

@Component({
  selector: 'app-hunt-details',
  templateUrl: './hunt-details.component.html',
  styleUrls: ['./hunt-details.component.css']
})
export class HuntDetailsComponent implements OnInit {

  constructor(
    private huntService: HuntService,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAreas();
    this.explore();
    this.stats = this.getStats();
    this.getHeroes();
  }
  
  areas: Area[];
  id: number;
  stats: Stats[]; 
  foodReward: number;
  heroes: Hero[];

  getAreas(): void {
    this.huntService.getAreas().subscribe(areas => this.areas = areas);
  }
  getStats(): Stats[] {
    return this.huntService.getStats();
  }
  getFoodReward() {
    this.huntService.getFoodReward().subscribe(foodReward => this.foodReward = foodReward);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  explore(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.huntService.explore(this.id))
      this.getFoodReward();
    else
      this.foodReward = -1; // Negative value indicates failure
  }
}