import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Black Feather Tavern';
  day = '21';
  output = 'It is a sunny day.';
  gold = 1000;
  food = 500;
  customerCount = 8; 
  ap = 10;
}
