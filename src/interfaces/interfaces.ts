export interface Recepies {
    recipes:Recipe[]
}

export type Recipe = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string | null;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: any[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  openLicense: number | null;
  image: string | undefined;
  imageType: string | undefined;
  summary: string;
  cuisines: any[];
  dishTypes: string[];
  diets: any[];
  occasions: any[];
  instructions: string;
  analyzedInstructions: any[];
  originalId: string | null | any;
  spoonacularSourceUrl: string;
};
