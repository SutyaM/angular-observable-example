import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ObserverServiceService implements OnInit, OnDestroy {

  public custom = new Observable(observer => {
    let counter = 1;
    setInterval(() => {
      observer.next(counter);
      counter++;
    }, 1000)
  })

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  constructor() { }
}

