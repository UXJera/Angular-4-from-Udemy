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
import { ErrorPageComponent } from './error-page/error-page.component';


import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },

  { path: 'servers',
    canActivateChild: [AuthGuardService],
    //canActivate: [AuthGuardService],
    component: ServersComponent, children:[
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  // { path: 'not-found', component: PagesNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },

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
