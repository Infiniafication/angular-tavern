import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Black Feather Tavern'; // move into Tavern Stat Service
  day = '1'; // move into Tavern Stat Service
}
