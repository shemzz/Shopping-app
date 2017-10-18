import { ShoppingListService } from '../shopping/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe ('Boli',
                'Most Sumptious Preparation of Plantain. Nothing beats this',
                './../../../assets/images/person.png',
                [
                  new Ingredient('Fish', 1),
                  new Ingredient('Plantain', 5),
                  new Ingredient('Palm Oil', 1),
                  new Ingredient('Pepper', 2)
                ]),
    new Recipe ('Egg and Grits',
                'Yummy and Healthy for breakfast', './../../../assets/images/person.png',
                [
                  new Ingredient('Milk', 1),
                  new Ingredient('Ground Corn Kernel', 1),
                  new Ingredient('Eggs', 20),
                ])
];

constructor (private slService: ShoppingListService) {}

getRecipes() {
  return this.recipes.slice();
}
addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);
}
}
