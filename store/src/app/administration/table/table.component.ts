import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.products$.subscribe(data => {
      this.products = data,
        console.log(data)

    })
  }
}
