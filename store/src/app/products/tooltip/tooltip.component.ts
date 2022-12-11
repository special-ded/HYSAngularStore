import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from '../cart/cart.service';

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
    this.products = this.cartService.cartList
    console.log(this.products);
    this.total = this.cartService.total
  }

}
