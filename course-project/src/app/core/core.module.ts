import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { RecipeService } from './../recipes/recipe.service';
import { DataStorageService} from './../shared/data-storage.service';
import { AuthService} from './../auth/auth.service';
//import { AuthGuard }  from './../auth/auth-guard.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    //AuthGuard // Only used in Recipes Routing
  ]
})
export class CoreModule { }
