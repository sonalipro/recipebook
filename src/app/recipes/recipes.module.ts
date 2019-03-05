import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { recipesRouting } from './recipes.routing';

@NgModule({
    declarations:[RecipesComponent,
                  RecipeStartComponent,
                  RecipeItemComponent,
                  RecipeEditComponent,
                  RecipeDetailComponent,
                  RecipeListComponent],
imports:[CommonModule, ReactiveFormsModule,recipesRouting]
})
export class RecipesModule{

}