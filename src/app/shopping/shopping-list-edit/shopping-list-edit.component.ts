import { Ingredient } from '../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild ('nameInput') nameInputRef: ElementRef;
@ViewChild ('amountInput') amountInputRef: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName, ingAmount);
this.ingredientAdded.emit(newIngredient);
  }

}
