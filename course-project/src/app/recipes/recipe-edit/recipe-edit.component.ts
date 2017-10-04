import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        //Checking to see if an ID exists and is a truthy value. If it has an ID, it can be edited. If it is new, it has no ID and is false.
        this.initForm();
        // We want to call initForm() when the route changes
      }
    )
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  // This is responsible for initializing our form
  private initForm() {

    let recipeName        = '';
    let recipeImagePath   = '';
    let recipeDescription = '';

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      // Only get the recipe if we are in editMode
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    // If not, return the empty values

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath' : new FormControl(recipeImagePath),
      'description' : new FormControl(recipeDescription)
      // These tie to the name="%" in the HTML
    });
  }

}
