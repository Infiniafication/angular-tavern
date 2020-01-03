import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HuntAreaComponent } from './hunt-area/hunt-area.component';
import { TavernStatComponent } from './tavern-stat/tavern-stat.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { ActionsComponent } from './actions/actions.component';
import { UpgradesComponent } from './upgrades/upgrades.component';
import { DayEndComponent } from './day-end/day-end.component';
import { TavernService } from './tavern.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: 'tavern', component: TavernStatComponent },
      { path: 'party', component: HeroesComponent },
      { path: 'hunt', component: HuntAreaComponent },
      { path: 'upgrade', component: UpgradesComponent },
      { path: 'end', component: DayEndComponent },
    ])
  ],
  declarations: [ AppComponent, HuntAreaComponent, TavernStatComponent, HeroesComponent, MessagesComponent, ActionsComponent, UpgradesComponent, DayEndComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService, MessageService, TavernService]
})
export class AppModule { }
