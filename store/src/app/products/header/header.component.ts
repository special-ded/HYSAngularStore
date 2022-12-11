import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHidden = false;

  showTooltip() {
    console.log('showTooltip');

  }

  closeTooltip() {
    console.log('closeTooltip');

  }
}
