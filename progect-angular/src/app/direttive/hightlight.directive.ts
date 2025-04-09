import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @Input() appHightlight=''
  @Input() defaultColor=''

  constructor(private element :ElementRef) {
    this.element.nativeElement.style.backgroundColor="yellow"
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.appHightlight || this.defaultColor || 'blue')
  }


  @HostListener('mouseleave')onMouseLeave(){
    this.cambiaColore('transparent')
  }
  cambiaColore(colore:string){
    this.element.nativeElement.style.backgroundColor= colore
  }
}
