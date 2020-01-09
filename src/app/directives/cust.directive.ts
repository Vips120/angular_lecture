import { Directive, OnInit,ElementRef, Renderer2 , HostListener, HostBinding, Input} from "@angular/core";

@Directive({
    selector: '[customSelector]'
})
export class Customdirective implements OnInit {
    @Input() bgk:any;
    @Input() cls:any;
    @HostBinding("style.backgroundColor") backgroundColor = this.bgk;
    @HostBinding("style.color") color;
    constructor(private el: ElementRef, private rd: Renderer2) {
       
    }
    ngOnInit() {
        console.log(this.bgk);
        console.log(this.cls);
        // this.el.nativeElement.style.backgroundColor = "red";
        // this.el.nativeElement.style.color = "white";
        // this.el.nativeElement.style.height = "100px"
        // this.rd.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
        // this.rd.setStyle(this.el.nativeElement, 'color', 'white');
        // this.rd.setStyle(this.el.nativeElement, 'height', '100px');
    }
    @HostListener('mouseenter') OnmouseEnter() {
        // this.rd.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
        this.backgroundColor = this.bgk;
        this.color = "white";
        // this.rd.setStyle(this.el.nativeElement, 'color', 'white');
        this.rd.setStyle(this.el.nativeElement, 'height', '100px');
        this.rd.setStyle(this.el.nativeElement, 'border', '2px solid green');
    }
    @HostListener('mouseleave') Onmouseleave() {
        this.backgroundColor = this.cls;
        this.color = "white";
        // this.rd.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
        // this.rd.setStyle(this.el.nativeElement, 'color', 'black');
        this.rd.setStyle(this.el.nativeElement, 'height', '50px');
        this.rd.setStyle(this.el.nativeElement, 'border', '2px solid blue');
    }
}