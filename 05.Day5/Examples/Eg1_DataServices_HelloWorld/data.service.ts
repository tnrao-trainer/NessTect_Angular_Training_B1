import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMessage():string
  {
    return "Hello World from Data Service";
  }
}
