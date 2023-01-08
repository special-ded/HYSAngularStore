import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hryvniaPipe',
})
<<<<<<<< HEAD:store/src/app/shared/pipes/hryvnia.pipe.ts
export class HryvniaPipe implements PipeTransform {
========
export class HryvniaPipePipe implements PipeTransform {
>>>>>>>> main:store/src/app/shared/pipes/hryvnia-pipe.pipe.ts
  transform(value: number): string {
    return `₴${value}.00`;
  }
}
