import { Component, OnInit } from '@angular/core';
import { ObserverServiceService } from '../observer-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observer2',
  templateUrl: './observer2.component.html',
  styleUrls: ['./observer2.component.css']
})
export class Observer2Component implements OnInit {

  constructor(private observerService: ObserverServiceService) { }

  subscription$: Subscription;
  custom: Observable<any>;

  ngOnInit(): void {
    this.custom = this.observerService.custom;

    this.subscription$ = this.observerService.custom.subscribe(
      (n) => {
      }, () => {
        console.log("error")
      }, () => {
        console.log("completed")
      }
    )
  }

}
