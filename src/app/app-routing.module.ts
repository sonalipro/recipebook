import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { HomeComponent } from './home.component';
import { RecipesModule } from './recipes/recipes.module';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'recipes',loadChildren:()=> RecipesModule },
  {path:'shopping-list', component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }