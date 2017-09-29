import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //const myNumbers = Observable.interval(1000);
    // // A new piece of data will be emitted every 1000ms or 1 second
    // myNumbers.subscribe(
    //   (number: Number) => {
    //     console.log(number)
    //   }
    //);

    // We want to create an observable that will fire after 2 seconds, 4 seconds, and will fail at 5 seconds, and also what would happen if it completes

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        // We tell our observer when it will recieve the data and then send it to the Observable
        // We need to clarify what data will be observed, in this case it is string
        setTimeout(() => {
          observer.next('First package');
          // .next() emits a normal data package
        },2000);
        setTimeout(() => {
          observer.next('Second package');
        },4000);
        setTimeout(() => {
          //observer.error('This does not work');
          observer.complete();
        },5000);
        setTimeout(() => {
          observer.next('Third package');
        },6000);
        // This never gets fired off
      }
    );
    myObservable.subscribe(
      (data: string) => {console.log(data);},
      (error: string) => {console.log(error);},
      () => {console.log('Completed');}
      // No data is being recived
    );
    // Create takes a function as an argument which holds our asyncronous code

  }

}
