import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productsService.getGeneratedProducts();
  }
}
