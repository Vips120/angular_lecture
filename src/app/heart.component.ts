import { Component, Input } from '@angular/core';
@Component({
    selector: "app-heart",
    template: `
     <div class="container">
      <div class="row">
       <div class="col-md-12">
<i class="fa fa-3x" aria-hidden="true"
 [class.fa-star-o]="!isActive"
 [class.fa-star]="isActive"
 (click)="StarMode()"
></i>
       </div>
      </div>
      <div class="row">
        <div class="col-md-12">
        <i class="fa fa-heart fa-3x" aria-hidden="true"
         (click)="Heart()"
         [class.fill-heart]="isActiveHeart"
         [class.empty-heart]="!isActiveHeart"
         style="cursor:pointer"
        ></i> {{likes}}
        </div>
      </div>
     
     </div>
    
    
    `,
    styles: [`
       .fill-heart{
           color:red;
          
       }
       .empty-heart {
           color:black;
          
        }
    
    `]
})
export class HeartComponent {
  @Input() public likes: number;
    public isActive: boolean = false;
    public isActiveHeart: boolean = false;

    public StarMode() {
        this.isActive = !this.isActive;
    };
    public Heart() {
        this.isActiveHeart = !this.isActiveHeart;
        this.likes += this.isActiveHeart ? 1 : -1;
    }
}