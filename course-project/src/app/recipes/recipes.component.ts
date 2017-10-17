import { Component, OnInit } from '@angular/core';

import { RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
