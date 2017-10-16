import { Component } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: HttpEvent<Object>)=> {
        console.log(response);
        //console.log(response.type === HttpEventType.Sent); // Type = 0, which means you will log a boolean w/ true when it is Sent
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes(); // We don't need to subscribe because we are already doing it inside the DataStorageService
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
