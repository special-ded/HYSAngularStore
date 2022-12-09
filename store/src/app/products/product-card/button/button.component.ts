import { Component, Input } from '@angular/core';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonName: string = '';

}
