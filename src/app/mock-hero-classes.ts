import { HeroClass } from './hero-class';

export const HEROCLASSES: HeroClass[] = [
  {
    name: 'Fighter',
    health: 100,
    fatigue: 50,
    arcana: 0,
    description: 'Health: **** | Fatigue: ** | Arcana: -'
  },
  {
    name: 'Assassin',
    health: 50,
    fatigue: 100,
    arcana: 0,
    description: 'Health: ** | Fatigue: **** | Arcana: -'
  },
  {
    name: 'Arcanist',
    health: 40,
    fatigue: 30,
    arcana: 80,
    description: 'Health: * | Fatigue: * | Arcana: ****'
  }
];