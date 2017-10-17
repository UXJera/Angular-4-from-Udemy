import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBML46QuEUObFYHy1ryzawk6DlFDQV_Rss",
      authDomain: "ng-recipe-book-9d32a.firebaseapp.com"
    });
  }

}
