import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    // A new piece of data will be emitted every 1000ms or 1 second
    myNumbers.subscribe(
      (number: Number) => {
        console.log(number)
      }
    );
  }

}
