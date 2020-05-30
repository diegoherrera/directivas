import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRounBlock]'
})
export class RounBlockDirective implements OnInit {

 @Input() appRounBlock: string; 

  constructor(private renderer: Renderer2, private elemRef: ElementRef) { 
        console.log(elemRef.nativeElement);        
  }
  
  ngOnInit(): void {
    console.log(this.appRounBlock);
    this.renderer.setStyle(this.elemRef.nativeElement, "color", this.appRounBlock);
  }

}
