import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

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
    //const header = new HttpHeaders().set('Authorization', 'Bearer <Token goes here>') // You can have this in the object below, or just make it into a variable and use that
    // Firebase wont accept this Header, but other servers may, and this is how you do it

    // This is our basic example

    // return this.httpClient.put(this.dbServer, // This is the URL where we want to send + the token for authentication
    //   this.recipeService.getRecipes(), {// We want to get our Recipes and overwrite them on the DB server
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token) // This is a typical use case
    //     //headers: header
    // });

    // This example we will use to see events as the progress
    const req = new HttpRequest(
      'PUT',
      this.dbServer,
      this.recipeService.getRecipes(),
      {
        reportProgress: true, // Useful if uploading or downloading something
        params: new HttpParams().set('auth', token)
      }
    ) // The code above just makes the request, but does not post the data back to Angular. The code below accesses it
    return this.httpClient.request(req)
  }





  getRecipes() {
    const token = this.authService.getToken();

  // This is for getting information from text data, normal is json
  //
    this.httpClient.get(this.dbServer, {
      observe: 'body', // This will not automatically extract the body data, but give the full response
      responseType: 'json', // Default = json, alternatives = blob, arrayBuffer, text
      params: new HttpParams().set('auth', token)
    }).map(
      (recipes) => {
        console.log(recipes)
        return [];
      }
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

  //This is the base for httpClient with get/put requests without advanced configuration

  // this.httpClient.get<Recipe[]>(this.dbServer + '?auth=' + token).map( // <> explicitly tells what data we expect to get back
  //   // (response: Response) => { // This is for the .http.get()
  //     // const recipes: Recipe[] = response.json(); needed for .http.get()
  //   (recipes) => { // By default, the httpClient will automatically extract the body of the response
  //     for (let recipe of recipes) {
  //       if (!recipe['ingredients']) {
  //         console.log(recipe);
  //         recipe['ingredients'] = [];
  //       }
  //     }
  //     return recipes;
  //   }
  // ).subscribe(
  //   (recipes: Recipe[]) => {
  //     this.recipeService.setRecipes(recipes);
  //   }
  // );
}
