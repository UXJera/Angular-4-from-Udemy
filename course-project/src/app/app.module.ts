import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { RecipesModule } from './recipes/recipes.module';
import { RecipeService } from './recipes/recipe.service';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { AuthModule } from './auth/auth.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { DataStorageService} from './shared/data-storage.service';

import { AuthService} from './auth/auth.service';
import { AuthGuard }  from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, // Contains CommonModule + more. Only use this module in app.module, and CommonModule for additional modules
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
