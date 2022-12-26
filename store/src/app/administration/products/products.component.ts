import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data) => {
      this.products = data;
    });
  }
}
