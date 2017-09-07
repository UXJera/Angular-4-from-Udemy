import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://lorempixel.com/output/food-q-c-640-480-5.jpg'),
    new Recipe('Another Test Recipe', 'Again is simply a test', 'http://lorempixel.com/output/food-q-c-640-480-6.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice(); //This will return a new array that's a copy of the original, meaning you can't access or edit the original from outside.
  }

  constructor() { }

}
