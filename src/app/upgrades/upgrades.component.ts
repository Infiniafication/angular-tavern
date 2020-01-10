import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Upgrade } from '../upgrade';
import { Tavern } from '../tavern';
import { TavernService } from '../tavern.service';


@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  constructor( 
    private tavernService: TavernService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getUpgrades();
    this.getTavernStats();
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id>0)
      this.purchaseUpgrade();
  }

  upgrades: Upgrade;
  tavern: Tavern;
  id: number;

  getUpgrades(): void {
    this.tavernService.getUpgrades().subscribe(upgrades => this.upgrades = upgrades);
  }

  getTavernStats(): void {
    this.tavernService.getTavernStats().subscribe(tavern => this.tavern = tavern);
  }

  purchaseUpgrade(): void{
    this.tavernService.purchaseUpgrade(this.id);
  }

}