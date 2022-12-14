import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  constructor(private cartService: CartService) { };

  ngOnInit(): void {
    this.setButtonName();
  }

  buttonName: string = "";
  @Input() quantityButtons: boolean = false;
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    quantity: 1
  };
  @Input() cartButtonName: string = '';

  handleCart(product: Product, button: string): void {
    if (button === "Add to cart") {
      this.cartService.addToCart(product);
      return
    }
    this.cartService.removeFromCart(product.id);
  }

  setButtonName(): void {
    if (this.cartButtonName === '') {
      this.buttonName = "Add to cart";
      return
    }
    this.buttonName = this.cartButtonName;
  }

  addQuantity(id: number): void {
    this.cartService.addQuantity(id);
  }

  subtractQuantity(id: number): void {
    this.cartService.subtractQuantity(id);
  }

}
