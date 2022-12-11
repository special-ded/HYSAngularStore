import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  constructor(private cartService: CartService) { };

  ngOnInit(): void {
    this.setButtonName()
  }

  buttonName: string = "";

  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0
  };

  @Input() cartButtonName: string = ''

  handleCart(product: Product, button: string) {
    if (button === "Add to cart") {
      this.cartService.addToCart(product);
      return
    }
    this.cartService.removeFromCart(product.id)
  }

  setButtonName(): void {

    if (this.cartButtonName === '') {
      this.buttonName = "Add to cart";
      return
    }
    this.buttonName = this.cartButtonName
  }

}
