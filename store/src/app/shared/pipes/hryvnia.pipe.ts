import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hryvniaPipe',
})
export class HryvniaPipe implements PipeTransform {
  transform(value: number | null): string {
    return `₴${value}.00`;
  }
}
