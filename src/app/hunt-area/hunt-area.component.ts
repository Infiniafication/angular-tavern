import { Component, OnInit } from '@angular/core';
import { Area } from '../area';
import { HuntService } from '../hunt.service';

@Component({
  selector: 'app-hunt-area',
  templateUrl: './hunt-area.component.html',
  styleUrls: ['./hunt-area.component.css']
})
export class HuntAreaComponent implements OnInit {

  constructor(private huntService: HuntService) { }

  ngOnInit() {
    this.getAreas();
  }

  areas: Area[];

  getAreas(): void {
    this.huntService.getAreas().subscribe(areas => this.areas = areas);
  }

  explore() {
    // some stats calculation
    // some rewards calculation
  }
}
