import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sum(a: number, b: number) {
    return a + b;
  }
}
