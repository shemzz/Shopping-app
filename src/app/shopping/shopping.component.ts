import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) {
   }

  ngOnInit() {
  this.ingredients = this.slService.getIngredient();
  this.slService.ingredientsChanged
  .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
  );
  }
}
