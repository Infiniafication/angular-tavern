import { HeroClass } from './hero-class';

export const HEROCLASSES: HeroClass[] = [
  {
    id: 0,
    name: 'Fighter',
    health: 100,
    fatigue: 50,
    arcana: 0,
    healthMultiplier: 1.15,
    fatigueMultiplier: 1.1,
    arcanaMultiplier: 0,
    description: 'Health: **** | Fatigue: ** | Arcana: -'
  },
  {
    id: 1,
    name: 'Assassin',
    health: 50,
    fatigue: 100,
    arcana: 0,
    healthMultiplier: 1.1,
    fatigueMultiplier: 1.2,
    arcanaMultiplier: 0,
    description: 'Health: ** | Fatigue: **** | Arcana: -'
  },
  {
    id: 2,
    name: 'Arcanist',
    health: 40,
    fatigue: 30,
    arcana: 80,
    healthMultiplier: 1.05,
    fatigueMultiplier: 1.1,
    arcanaMultiplier: 1.2,
    description: 'Health: * | Fatigue: * | Arcana: ****'
  }
];