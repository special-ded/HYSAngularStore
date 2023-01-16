import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter, Observable, of, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductHttpService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  searchControl = new FormControl<string>('', Validators.requiredTrue);
  products$: Observable<Product[] | null> = new Observable<Product[]>();

  constructor(private http: ProductHttpService, private router: Router) {}

  ngOnInit(): void {
    this.searchControl.setValidators([
      Validators.pattern('[a-zA-Z,0-9]*'),
      Validators.minLength(1),
      Validators.maxLength(30),
    ]);

    this.products$ = this.searchControl.valueChanges.pipe(
      debounceTime(250),
      switchMap((value) => {
        if (this.searchControl.invalid) {
          return of(null);
        }

        return this.http.getDataBySearch<Product[]>('name', value);
      }),
      filter(Boolean)
    );
  }

  redirect(id: string): void {
    this.router.navigateByUrl(`/shop/${id}`);
  }
}
