import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'http://lorempixel.com/output/food-q-c-640-480-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
    ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?', 'http://lorempixel.com/output/food-q-c-640-480-6.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
    //This will return a new array that's a copy of the original, meaning you can't access or edit the original from outside.
  }

  getRecipe(index: number) {
    return this.recipes[index];
    // Added this to work with out recipe-detail.component
    // This returns the recipe with the index value retrieved by the function
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
