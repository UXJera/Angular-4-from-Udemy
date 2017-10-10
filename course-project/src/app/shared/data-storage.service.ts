import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {RecipeService} from '../recipes/recipe.service';

import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) {}

  dbServer = "https://ng-recipe-book-9d32a.firebaseio.com/recipes.json";
  // The .json at the end is a Firebase specific necessity, other DBs may not need it.


  storeRecipes() {
    return this.http.put(this.dbServer, this.recipeService.getRecipes());
    // getRecipes will get a copy of the recipes and store them in an array
    // We want to use PUT because we want to overwrite the old data
  }

  getRecipes() {
    return this.http.get(this.dbServer).subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
