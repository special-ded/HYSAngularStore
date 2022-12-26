import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hryvniaPipe',
})
export class HryvniaPipePipe implements PipeTransform {
  transform(value: number): string {
    return `₴${value}.00`;
  }
}
