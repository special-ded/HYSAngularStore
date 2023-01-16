import { Component } from '@angular/core';
import { ButtonEnum } from 'src/app/shared/enums/button.enum';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  cartButtonName: string = ButtonEnum.removeFromCart;
}
