import {NgModule} from '@angular/core';
import {Routes, RouterModule} from  '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}, // {path: '', redirectTo: '/recipes'},
  // We can't use this because '' empty route is a part of EVERY route
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
