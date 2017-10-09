import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServersService {

  dbServer = "https://udemy-ng-http-2b3a2.firebaseio.com/data.json"

  constructor(private http: Http) { }
  storeServers(servers: any[]) {
    return this.http.post(this.dbServer, servers);
  }
}
