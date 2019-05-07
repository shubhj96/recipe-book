import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RecipeComponent} from './recipe/recipe.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path : 'recipe', component : RecipeComponent},
  {path : 'cart', component : CartComponent},
  {path: '', pathMatch: 'full', redirectTo: 'recipe'}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
