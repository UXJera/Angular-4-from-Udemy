import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]' //Camel Case
  //This will be accessed by appBasicHighlight WITHOUT BRACKETS when added to an Element i.e. <p appBasicHighlight>
})

export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  // We need a reference to the element that it was placed in

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
  // This is not a best case use. It isn't best to access elements this way.
}
