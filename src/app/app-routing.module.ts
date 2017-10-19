import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule} from '@angular/router';
const appRoutes: Routes = [
  {path: 'welcome', component: BlogComponent },
  {path: 'recipes', component: RecipeComponent, children: [
  {path: '', component: RecipeStartComponent},
  {path: 'new', component: RecipeEditComponent},
  {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent}
  ]},
  {path: 'shopping-list', component: ShoppingComponent}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule {}
