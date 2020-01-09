import { Component } from '@angular/core';
@Component({
    selector: "app-gender",
    template: `
    <div class="container">
     <div class="row">
       <div class="col-md-12">
        <button type="button" class="btn btn-danger btn-md"
         (click)="defaultPerson=male"
         [disabled]="defaultPerson==male"
        >
          Male
        </button>

        <button type="button" class="btn btn-success btn-md"
        (click)="defaultPerson=female"
        [disabled]="defaultPerson==female"
        >
        Female
      </button>
       </div>
     </div>
 <div class="row" *ngIf="defaultPerson">
  <div class="col-md-12">
  <img src={{defaultPerson.imgUrl}}>
  <h2>{{defaultPerson.name}}</h2>
  </div>
 </div>

    </div>
    `,
    styles: [`
       button {
           margin:10px
       }
    `]
})

export class GenderComponent {
    public defaultPerson;
    public male = {
        name: "JOHN DOE",
        imgUrl: "../assets/img/face1.jpg"
    };

    public female = {
        name: "EMMA DOE",
        imgUrl: "../assets/img/face2.jpg"
    };
}