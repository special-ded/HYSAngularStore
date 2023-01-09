import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { User } from '../interfaces/user.interface';
import { ProductHttpService } from './product-http.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnInit {
  productsList$ = new BehaviorSubject<User[]>([]);
  filteredByText$ = new BehaviorSubject<User[]>([]);

  constructor(private http: ProductHttpService) {}

  ngOnInit(): void {}

  generateProducts(): void {
    this.http.getList<User[]>().subscribe((data) => {
      console.log(data);
      this.productsList$.next(data);
      this.filteredByText$.next(data);
    });
  }

  getProductById(id: string) {
    return this.http.getById<Product>(id);
  }
}
