import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  constructor(private cartService: CartService) { }

  cartButtonName: string = 'Remove from cart';
  totalPrice: number = this.cartService.total;

  products: Product[] = this.cartService.getCartList();

}
