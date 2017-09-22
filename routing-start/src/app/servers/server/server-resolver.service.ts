import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {ServersService} from '../servers.service';

interface Server {
  id: number,
  name: string,
  status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server
  // { id: number,
  //   name: string,
  //   status: string}
  //   // This is a type definition, we could make an interface if we wanted to
> {

  constructor(private serversService: ServersService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server {
      return this.serversService.getServer(+route.params['id']);
  }
}
