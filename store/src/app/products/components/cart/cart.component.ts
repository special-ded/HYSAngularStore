import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(
      (number) => (this.totalPrice = number)
    );
  }

  cartButtonName: string = 'Remove from cart';
  totalPrice: number = 0;
  products: Product[] = this.cartService.getCartList();
}
