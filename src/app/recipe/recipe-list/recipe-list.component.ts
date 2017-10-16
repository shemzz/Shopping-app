import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasSelected = new EventEmitter <Recipe>();
  recipes: Recipe[] = [
    new Recipe ('Test Title', 'Test Description', './../../../assets/images/person.png'),
    new Recipe ('Another Test Title', 'More Test Description', './../../../assets/images/person.png')
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }

}
