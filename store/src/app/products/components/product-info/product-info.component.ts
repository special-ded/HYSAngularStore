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
  }

  addToCart(product: Product): void {
    console.log(product);
    this.cartService.addToCart({ ...product, quantity: 1 });
  }
}
