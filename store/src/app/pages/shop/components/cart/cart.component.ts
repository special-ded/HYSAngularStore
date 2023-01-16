import { Component, OnInit } from '@angular/core';
import { ButtonEnum } from 'src/app/shared/enums/button.enum';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.ngOnInit();
  }

  cartButtonName: string = ButtonEnum.removeFromCart;
}
