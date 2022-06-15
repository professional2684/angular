import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseUpper'
})
export class CaseUpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
