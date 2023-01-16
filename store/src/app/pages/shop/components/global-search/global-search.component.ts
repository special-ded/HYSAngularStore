import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductHttpService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  constructor(private http: ProductHttpService, private router: Router) {}
  searchControl = new FormControl<string>('');
  products$: Observable<Product[]> = new Observable<Product[]>();

  ngOnInit(): void {
    this.products$ = this.searchControl.valueChanges.pipe(
      debounceTime(250),
      filter(Boolean),
      switchMap((value) => this.http.getDataBySearch<Product[]>('name', value))
    );
  }

  redirect(id: string): void {
    this.router.navigateByUrl(`/shop/${id}`);
  }
}
