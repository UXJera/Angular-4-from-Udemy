import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // This first route params is good if you are not going to be changing the data
    this.route.params
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }//This first function is fired whenever a change happens w/ route parameters
    );
    // This second route params is good when you have dynamic changes
  }


}
