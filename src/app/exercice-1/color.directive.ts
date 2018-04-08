import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') fontColor: string;
  @HostListener('window:keyup', ['$event']) keyevent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === 'ArrowLeft') {
      this.fontColor = 'red';
    } else if (event.key === 'ArrowRight') {
      this.fontColor = 'blue';
    } else if (event.key === 'ArrowUp') {
      this.fontColor = 'green';
    } else if (event.key === 'ArrowDown') {
      this.fontColor = 'grey';
    }
  }

  constructor() {}

}
