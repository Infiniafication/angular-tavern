import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Black Feather Tavern';
  day = '1';
  output = 'It is a sunny day.';
  ap = 10;
}
