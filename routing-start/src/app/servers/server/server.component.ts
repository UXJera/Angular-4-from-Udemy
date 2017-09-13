import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //The + at the beginning means that it wants to return the value as a number. Without the +, it would return a string '1'
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route, queryParamsHandling: 'preserve'
    });
    // Since we are already on servers/id, we don't need to add (['/servers' , this.server.id, 'edit']) since we can just use a relative path
  }

}
