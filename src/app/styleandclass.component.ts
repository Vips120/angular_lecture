import { Component } from "@angular/core";
@Component({
    selector: "app-style",
    template: `
     <div class="container">
       <div class="row">
       <h1 [style.color]="isActive ? 'red': 'black'">HELLO USER</h1>
         <div class="col-md-12">
           <button type="button" class="btn  btn-md"
            [class.btn-danger]="!isActive"
            [class.btn-primary]="isActive"
            (click)="AddColor()"
           >CLICK </button>
           <img src="{{isActive ? imgUrl : imgurl1}}">
         </div>
       </div>
     </div>
    
    `
})

export class StyleComponent {
    public isActive: boolean = true;
    public imgUrl: string = "../assets/img/face1.jpg";
    public imgurl1: string = "../assets/img/face2.jpg";
    AddColor() {
        this.isActive = !this.isActive;
    }
}