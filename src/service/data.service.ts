import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { IAppState, ADD_CART, UPDATE_CART, REMOVE_CART, REMOVE_ALL_CARTS } from 'src/app/store';
import { Ingredient } from 'src/app/cart';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cartItem : any = [];

  constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) { 
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  /**
   * This method is used to fetch the recipe book
   */
  public getJSON(): Observable<any> {
    return this.http.get("../assets/recipe.json");
  }

  /**
   * This method is used to add ingredient to the shopping list
   * @param ingredient : selected ingredient
   */
  public addToCart(ingredient){
    this.cartItem = this.ngRedux.getState().cart;
    let index = this.cartItem.findIndex(x => x.name ===ingredient.name);
    if(index != -1){
      this.ngRedux.dispatch({type: UPDATE_CART, cart: ingredient});
    } else {
      ingredient.requiredQty = 1;
      this.ngRedux.dispatch({type: ADD_CART, cart: ingredient});
    }
  }

  /**
   * This method is used to get the cart list from the state
   */
  public getCartItem() {
    return this.ngRedux.getState().cart;
  }

  /**
   * This method is used to remove the item at the selected index from the list
   * @param index : selected Index
   */
  public removeItem(item : Ingredient) {
    this.ngRedux.dispatch({type: REMOVE_CART, name: item.name });
  }

  /**
   * This method is used to clear the cart
   */
  public clearCart(){
    this.ngRedux.dispatch({type: REMOVE_ALL_CARTS});
  }
}
