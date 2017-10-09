import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServersService {

  dbServer = "https://udemy-ng-http-2b3a2.firebaseio.com/data.json"

  constructor(private http: Http) { }
  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.dbServer, servers,
      {headers: headers});
      // This is an observable
  }

  getServers() {
    return this.http.get(this.dbServer);
  }
}
