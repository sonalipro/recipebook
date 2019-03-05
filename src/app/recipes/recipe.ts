import{Ingredient} from "../Ingredient";


export class Recipe {
    constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {}
  }
  
