import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  buttonName: string = 'Add to cart'

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService) {
  }

  id: number = 0;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('productId')!
      console.log(this.id);

      console.log(this.service.getProductById(this.id));
    })
  }

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }
}
