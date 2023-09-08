import { Injectable } from '@angular/core';
import { mockBaskets } from './mock-baskets';
import { iBaskets } from './iBaskets';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  fetchAll()  { 
    return mockBaskets;
  }
}
