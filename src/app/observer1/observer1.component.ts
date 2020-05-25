import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObserverServiceService } from '../observer-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observer1',
  templateUrl: './observer1.component.html',
  styleUrls: ['./observer1.component.css']
})
export class Observer1Component implements OnInit {

  constructor(private observerService: ObserverServiceService) { }

  subscription$: Subscription;
  custom: Observable<any>;
  n: number;

  ngOnInit(): void {
    this.custom = this.observerService.custom;

    this.subscription$ = this.observerService.custom.subscribe(
      (n: number) => {
        this.n = n;
      }, error => {
        console.log(error)
      }, () => {
        console.log("completed")
      }
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
