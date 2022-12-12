import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'store';

  products: Data[] = this.generateProducts(8)

  generateProducts(n: number): Data[] {
    const names: string[] = ['Xiaomi 12', 'AirPods', 'Iphone 14', 'Asus ROG 17',
      'Mi AirDots', 'Sony WH-1000XM4', 'Power Bank 20000', 'Invertor 12-220',
      'BFG 9000', 'Doom Eternal'];
    let arr: Data[] = [];

    for (let i = 0; i < n; i++) {
      const obj = {
        id: i,
        name: names[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100)
      };
      arr.push(obj);
    }
    return arr;
  }

}

