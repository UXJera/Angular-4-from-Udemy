import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1280px-Banjo_Shark_recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); //This will return a new array that's a copy of the original, meaning you can't access or edit the original from outside.
  }

  constructor() { }

}
