import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  constructor(
    public cartService: CartService,
    private lsService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.cartService.cartList$.next(this.lsService.checkLocalStorage());
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
