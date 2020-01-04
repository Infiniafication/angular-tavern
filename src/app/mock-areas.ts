import { Area } from './area';

export const AREAS: Area[] = [
    {
      id: 0,
      name: "Woodrock Plains",
      minlevel: 1,
      maxlevel: 10,
      minfatigue: 25,
      maxfatigue: 50,
      actionpoints: 2,
      description: "Vast plains that are inhabited by small wild animals."
    },
    {
      id: 1,
      name: "Sleepy Forest",
      minlevel: 11,
      maxlevel: 20,
      minfatigue: 30,
      maxfatigue: 60,
      actionpoints: 3,
      description: "An eerie forest. Perhaps it would be fun to go on an adventure?"
    },
    {
      id: 2,
      name: "Abandoned Tower",
      minlevel: 21,
      maxlevel: 30,
      minfatigue: 50,
      maxfatigue: 100,
      actionpoints: 5,
      description: "A tower that once stood proud - now abandoned. Rumours speak of devilish creatures lurking within."
    }
];


