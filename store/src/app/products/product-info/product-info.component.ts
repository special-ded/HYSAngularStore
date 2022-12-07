import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {

  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0
  };

}
