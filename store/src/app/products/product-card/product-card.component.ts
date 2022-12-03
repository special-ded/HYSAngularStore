import { Component, Input } from '@angular/core';
import { Data } from 'src/app/interfaces/products.interface';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: Data = {
    id: 0,
    name: '',
    price: 0
  };

  buttonName: string = "Add to cart"
}
