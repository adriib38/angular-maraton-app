import { Injectable } from '@angular/core';

import { Runner } from './interface/runner';
import { RUNNERS } from './mock/mock-runners';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OldRunnersService {

  constructor() { }

  getRunners(): Observable<Runner[]> {
    return of(RUNNERS);
  }

  getRunner(id: number): Observable<Runner | undefined> {
    const runner = RUNNERS.find(runner => runner.id === id);
    return of(runner);
  }

  removeRunner(id: number): Observable<Runner[]> {
    const index = RUNNERS.findIndex(runner => runner.id === id);
  
    if (index > -1) {
      RUNNERS.splice(index, 1);
    }
  
    return of(RUNNERS);
  }

  getNumberOfRunners(): Observable<number> {
    return of(RUNNERS.length);
  }


}
