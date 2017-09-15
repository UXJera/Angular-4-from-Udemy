import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PagesNotFoundComponent } from './pages-not-found/pages-not-found.component';
import { AuthGuardService } from './auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },

  { path: 'servers', 
    canActivateChild: [AuthGuardService],
    //canActivate: [AuthGuardService],
    component: ServersComponent, children:[
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ] },
  { path: 'not-found', component: PagesNotFoundComponent },

  { path: '**', redirectTo: '/not-found' }
  // MAKE SURE THIS IS THE LAST ROUTE

];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
      //This is where our Routes will be registered
    ],
    exports: [RouterModule]
  })

export class AppRoutingModule {
}
