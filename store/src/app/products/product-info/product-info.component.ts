import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService) {
  }

  buttonName: string = 'Add to cart';
  id: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    quantity: 1
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!
      this.product = this.productService.getProductById(this.id)
    })
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}