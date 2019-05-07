import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service";
import { Router } from '@angular/router';
import { Ingredient, ICart } from '../cart';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  foodData : any = [];
  selectedData : any = {};

  constructor( private dataService : DataService, private route : Router) { 
    this.dataService.getJSON().subscribe(data => {
      this.foodData = data; 
      this.selectedData = data[0]; 
    });
  }

  ngOnInit() {
  }

  /**
   * This method is used to update the selected food from the list
   * @param selectedData : selected food
   */
  selectItem(selectedData : ICart) {
    this.selectedData = selectedData;
  }

  /**
   * This method is used to add ingredient to the shopping cart
   * @param ingredient : ingredient to add
   */
  addToCart(ingredient : Ingredient){
    this.dataService.addToCart(ingredient);
  }

  /**
   * this mehtod is used to navigate to the shopping cart
   */
  navigateToCart(){
    this.route.navigate(['cart']);
  }

}
