import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  constructor(
    private cartService: CartService
  ) { }

  products: Product[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.products = this.cartService.cartList;
    this.cartService.cartTotal$.subscribe(data => this.total = data);
  }

  deleteFromCart(id: number): void {
    this.cartService.removeFromCart(id)
  }

  addQuantity(id: number): void {
    this.cartService.addQuantity(id)
  }

  subtractQuantity(id: number): void {
    this.cartService.subtractQuantity(id);
  }
}
