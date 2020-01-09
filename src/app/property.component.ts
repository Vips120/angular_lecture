import { Component } from '@angular/core';
@Component({
    selector: "app-property",
    template: `
      <div class="container">
       <div class="row">
        <div class="col-md-12">
          <ul *ngFor="let c of courses; let i=index">
           <li>{{i+1}} - {{c}}</li>
          </ul>
        </div>
        <h2 *ngIf="username.length >=5; else error">{{username}}</h2>
        <ng-template #error>
        <h4>Please enter a 5 characters</h4>
        </ng-template>
       </div>
       <div class="row">
        <div class="col-md-12">
         <button type="button" class="btn btn-danger btn-md"
          (click)="changeMenu='home'"
         >
          Home
         </button>
         <button type="button" class="btn btn-info btn-md"
         (click)="changeMenu='about'"
         >
         About
        </button>
        </div>
        <div class="col-md-12">
         <div
          *ngIf="changeMenu"
         [ngSwitch]="changeMenu">
          <h2 *ngSwitchCase="'home'">HOME SECTION</h2>
          <h2 *ngSwitchCase="'about'">ABOUT SECTION </h2>
          <h2 *ngSwitchDefault>NOT FOUND ANYTHING </h2>
         </div>
        </div>
        <div class="col-md-6">
        <div class="card text-white bg-primary">
  <div class="card-body">
    <h4 class="card-title">
    TITLE:
    <ng-content select=".title"></ng-content>
    </h4>
    <p class="card-text">
    BODY:
    <ng-content select=".body"></ng-content>
    </p>

</div>
        </div>
       </div>
      </div>
    `,
    styles: [`
     button {
         margin:5px;
     }
    `]
})
export class PropertyComponent {
    public courses = ["Angular", "javascript", "reactjs", "mongodb"];
    public username = "vipul";
    public changeMenu;
    constructor() { }
}