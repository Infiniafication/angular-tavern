import { Component, OnInit } from '@angular/core';
import { DayService } from '../day.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor( private dayService: DayService ) { }

  ngOnInit() {
    this.getDay();
  }
  
  name: string = 'Black Feather Tavern'; // TODO: Move into proper data storage
  day: number; // TODO: Move into proper data storage

  getDay(): void {
    this.dayService.getDay().subscribe(day => this.day = day);
  }

}