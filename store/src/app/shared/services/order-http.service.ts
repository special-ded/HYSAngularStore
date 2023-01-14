import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderHttpService extends BaseHttpService {
  override getURL(): string {
    return this.BASE_URL + 'orders/';
  }
}
