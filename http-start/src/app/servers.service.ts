import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServersService {

  dbServer = "https://udemy-ng-http-2b3a2.firebaseio.com/data.json"

  constructor(private http: Http) { }
  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.dbServer, servers,
      {headers: headers});
    // return this.http.post(this.dbServer, servers,
    //   {headers: headers});
  }

  getServers() {
    return this.http.get(this.dbServer)
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          };
          return data;
        }
      );
  }
}
