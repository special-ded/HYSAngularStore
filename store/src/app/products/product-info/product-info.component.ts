import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  buttonName: string = 'Add to cart';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService) {
  }

  id: number = 0;
  product: Product = {
    id: 0,
    name: 'aaaaa',
    price: 0
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log(params);

      this.id = +params.get('id')!
      console.log(this.id);

      console.log(this.productService.getProductById(this.id));
      this.product = this.productService.getProductById(this.id)
    })
  }
}
