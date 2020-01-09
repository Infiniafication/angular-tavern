import { Component, OnInit } from '@angular/core';
import { DayService } from '../day.service';

@Component({
  selector: 'app-day-end',
  templateUrl: './day-end.component.html',
  styleUrls: ['./day-end.component.css']
})
export class DayEndComponent implements OnInit {

  constructor( private dayService: DayService ) { }

  ngOnInit() {
    this.dayService.endDay();
  }

}