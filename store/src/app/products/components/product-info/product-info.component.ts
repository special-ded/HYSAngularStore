import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  buttonName: string = 'Add to cart';
  id: string = '';

  product: Product = {
    id: '',
    name: '',
    price: 0,
    quantity: 1,
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;

      this.productService
        .getProductById(this.id)
        .subscribe((data) => (this.product = data));
    });

    this.setButtonName();
  }

  addToCart(product: Product): void {
    if (this.buttonName === 'Add to cart') {
      this.cartService.addToCart({ ...product, quantity: 1 });
      this.buttonName = 'In cart';
      return;
    }

    if (this.buttonName === 'In cart') {
      return;
    }
  }

  setButtonName(): void {
    if (this.cartService.getCartList().some((el) => el.id === this.id)) {
      this.buttonName = 'In cart';
      return;
    }
  }
}
