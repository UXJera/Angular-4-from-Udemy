import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // Display something
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // Display nothing
      this.vcRef.clear();
    }
  }

  // This will sit on an ng-template


  //This is still a property, but the method is fired off when it changes, when the condition changes
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
