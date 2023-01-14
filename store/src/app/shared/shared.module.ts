import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPriceDirective } from './directives/color-price.directive';
import { ShortPipe } from './pipes/short.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HryvniaPipe } from './pipes/hryvnia.pipe';

@NgModule({
  declarations: [HryvniaPipe, ColorPriceDirective, ShortPipe, SpinnerComponent],
  imports: [CommonModule],
  exports: [HryvniaPipe, ColorPriceDirective, ShortPipe, SpinnerComponent],
})
export class SharedModule {}
