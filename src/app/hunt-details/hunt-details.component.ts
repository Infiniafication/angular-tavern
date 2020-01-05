import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Area } from '../area';
import { HuntService } from '../hunt.service';


@Component({
  selector: 'app-hunt-details',
  templateUrl: './hunt-details.component.html',
  styleUrls: ['./hunt-details.component.css']
})
export class HuntDetailsComponent implements OnInit {

  constructor(
    private huntService: HuntService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAreas();
    this.explore();
  }
  
  areas: Area[];
  id: number;

  getAreas(): void {
    this.huntService.getAreas().subscribe(areas => this.areas = areas);
  }
  explore(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.huntService.explore(this.id);
  }
}