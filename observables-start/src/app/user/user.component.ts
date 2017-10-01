import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {UsersService} from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
    // params is an asyncronous object that recieves data from Angular and assigns the id according to what the id is in the http://.../[id]
      .subscribe(
        // subscribe is our Observer
        (params: Params) => {
          this.id = +params['id'];
          // This is our Handle Data
        }, () => {
          // This is our Handle Error
        }, () => {
          // This is our Handle Complete
        }
        // subscribe takes 3 arguments: Handle Data, Handle Error, and Handle Complete
        // The only Handle that makes sense is the first one
        // We subscribing to an observable which wraps a data source (the data source being code in` angular which emits a new parameter whenever we click a link)
        // Once the click resolves, the data package is pushed and recieved by our subsriber (the 3 methods inside the .subscribe() ).
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
    // A new data package containing this id is sent
  }

}
