import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { ProductsService } from '../products.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartButtonName: string = 'Remove from cart';
  totalPrice: number = 0;
  products: Product[] = this.cartService.getCartList();

  ngOnInit(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }

}
