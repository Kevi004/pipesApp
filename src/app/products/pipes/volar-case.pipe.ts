import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volarCase'
})

export class VolarCasePipe implements PipeTransform {

  transform(value: boolean): string {
    return  (value)
            ? "Puede volar"
            : "No puede volar"

  }
}
