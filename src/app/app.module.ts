import { Routes, RouterModule } from '@angular/router';
import { ShoppingListService } from './shopping/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'shopping-list', component: ShoppingComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
