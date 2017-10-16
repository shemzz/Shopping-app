import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
ingredients: Ingredient[] = [
new Ingredient('apples', 5),
new Ingredient('Tomatoes', 10)
];
  constructor() {
   }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient) {
  this.ingredients.push(ingredient);
}
}
