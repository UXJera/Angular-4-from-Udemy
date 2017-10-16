import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';

import {Recipe} from '../recipes/recipe.model';

import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  dbServer = "https://ng-recipe-book-9d32a.firebaseio.com/recipes.json";
  // The .json at the end is a Firebase specific necessity, other DBs may not need it.


  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put(
      this.dbServer + '?auth=' + token, // This is the URL where we want to send + the token for authentication
      this.recipeService.getRecipes(), // We want to get our Recipes and overwrite them on the DB server
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>(this.dbServer + '?auth=' + token) // <> explicitly tells what data we expect to get back
    .map(
      // (response: Response) => { // This is for the .http.get()
        // const recipes: Recipe[] = response.json(); needed for .http.get()
      (recipes) => { // By default, the httpClient will automatically extract the body of the response
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }


}
