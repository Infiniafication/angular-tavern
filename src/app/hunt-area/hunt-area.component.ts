import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hunt-area',
  templateUrl: './hunt-area.component.html',
  styleUrls: ['./hunt-area.component.css']
})
export class HuntAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  areas = [
    {
      name: "Woodrock Plains",
      minlevel: 1,
      maxlevel: 10,
      minfatigue: 25,
      maxfatigue: 50,
      description: "Vast plains that are inhabited by small wild animals."
    },
    {
      name: "Sleepy Forest",
      minlevel: 11,
      maxlevel: 20,
      minfatigue: 30,
      maxfatigue: 60,
      description: "An eerie forest. Perhaps it would be fun to go on an adventure?"
    },
    {
      name: "Abandoned Tower",
      minlevel: 21,
      maxlevel: 30,
      minfatigue: 50,
      maxfatigue: 100,
      description: "A tower that once stood proud - now abandoned. Rumours speak of devilish creatures lurking within."
    }
  ];

  explore() {
    // some stats calculation
    // some rewards calculation
  }
}
