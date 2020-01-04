import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Area } from './area';
import { AREAS } from './mock-areas';

@Injectable({
  providedIn: 'root',
})

export class HuntService {

  constructor() { }

  getAreas(): Observable<Area[]> {
    return of(AREAS);
  }

}
