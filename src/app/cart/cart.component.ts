import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: any = [];
  constructor(private dataService: DataService, private route: Router) {
    this.getCartItem();
  }

  ngOnInit() {
  }

  /**
   * this method is used to get the cart list from the store
   */
  getCartItem(){
    this.cartList = this.dataService.getCartItem();
  }

  /**
   * This method is used to remove the selected index from the list
   * @param index : selected index to be removed
   */
  removeItem(index: number) {
    this.dataService.removeItem(index);
    this.getCartItem();
  }

  /**
   * This method is used to clear the cart list
   */
  clearCart() {
    this.dataService.clearCart();
    this.getCartItem();
  }

  /**
   * This method is used to navigate to recipe page
   */
  navigateToRecipe() {
    this.route.navigate(['recipe']);
  }

}
