import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.ngOnInit();
  }

  deleteFromCart(id: string): void {
    this.cartService.removeFromCart(id);
  }

  addQuantity(id: string): void {
    this.cartService.addQuantity(id);
  }

  subtractQuantity(id: string): void {
    this.cartService.subtractQuantity(id);
  }
}
