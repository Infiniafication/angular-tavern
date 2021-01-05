# angular-tavern

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-isaac-tavern)

----------------------------------------------
Dev Notes (to be removed later!)
----------------------------------------------
ActionMenu
- Hunt
- Upgrade
- End Day (Day +1, Restore all AP and recover stats)

HuntArea
- Woodrock Plains (Lv 1 - 10) [+25 ~ 50 Fatigue]
- Sleepy Forest (Lv 11 - 20) [+30 ~ 60 Fatigue]
- Abandoned Tower (Lv 21 - 30) [+50 ~ 100 Fatigue]

HeroClass
- Fighter
	- Justice [++++Health]
	- Faith [+++Health, +Arcana]
- Assassin
	- Shadow Master [++++Fatigue]
	- Stormbringer [+++Fatigue, +Arcana]
- Arcanist
	- Prodigy [++++Arcana]
	- Illusionist [+Health, +++Arcana]
	- Mercy [++Health, +Fatigue, +Arcana]

HeroStat
[]Hero_1
- Name
- Level
- Class
- Spc (specialization)
- maxHealth
- curHealth
- maxArcana
- curArcana
- maxFatigue
- curFatigue

RecoveryAction (used in between hunts)
- Meditate (-4 AP, -50% Fatigue)
- Mend (-50 Arcana, -50% Fatigue, +1 AP)
- Scout (+25 Fatigue, Reduces damage taken by 30% and fatigue gained by 50% for the next encounter)
- Preparation (-25 Arcana, Reduces damage taken by 20% and arcana spent by 50% for the next encounter)


TavernStat
- Gold
- Food
- Popularity = Customers (/ Time Unit, maybe hour)
- PatronWealth
- GoldIncome = Popularity * Patron Wealth
- FoodUpkeep = Popularity * (3 * Patron Wealth)

TavernUpgrade
- Upgrade Tavern (++Popularity, +Patron Wealth, Unlocks building upgrades)
- Build Bath House (+++Popularity, ++Patron Wealth)
	-> Upgrade to Hot Spring (++++Popularity, ++Patron Wealth)
- Build Stable (+++Popularity, +Patron Wealth)
- The rest, look at Miro


Assumptions:
Tavern Maintenance is free except for food upkeep.

