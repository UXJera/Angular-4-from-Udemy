import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

import { AppRoutingModule } from './app-routing.module';

import { RecipesModule } from './recipes/recipes.module';
import { RecipeService } from './recipes/recipe.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { ShoppingListService } from './shopping-list/shopping-list.service';

import { DataStorageService} from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import {AuthService} from './auth/auth.service';
import {AuthGuard}  from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,

    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule, // Contains CommonModule + more. Only use this module in app.module, and CommonModule for additional modules
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
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
