import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Component, ElementRef, OnInit,  ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild ('nameInput') nameInputRef: ElementRef;
@ViewChild ('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName, ingAmount);
this.slService.addIngredient(newIngredient);
  }

}
