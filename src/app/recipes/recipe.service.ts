import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from "./recipe";
import { Ingredient } from '../Ingredient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged=new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [new Recipe('Pizza', 'Very testy', 'https://i.ytimg.com/vi/sw0XLwcMZKg/maxresdefault.jpg',[
    new Ingredient('pork meat', 2),
    new Ingredient('french frise', 1)
  ]),
  
  new Recipe('Burger', 'Okayish', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/05/1517424682-salmon-burger-delish-1.jpg',[])
];

  constructor(private http:HttpClient) { }
  getRecipes()
  {
return this.recipes;
  }
  getRecipe(id:number)
  {
return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe)
  {
this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  addRecipe(recipe:Recipe)
  {
this.recipes.push(recipe);
  }
  editRecipe(oldRecipe:Recipe, newRecipe:Recipe)
  {
this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;
  }
  storeData()
  {
const body=JSON.stringify(this.recipes);
const headers= new HttpHeaders({
  'Content-Ttype': 'application/json'})
;
return this.http.put('https://myrescipe.firebaseio.com/recipes.json',body,{headers:headers}) ; 
}
fetchData()
{
return this.http.get('https://myrescipe.firebaseio.com/recipes.json')
.subscribe((data:Recipe[])=>{this.recipes=data;
this.recipesChanged.emit(this.recipes)});
}





}

