import { Component } from '@angular/core';
@Component({
    selector: "app-parent",
    template: `
     <div class="container">
      <div class="row">
       <div class="col-md-12">
            <h1>PARENT SECTION:</h1>
            <app-child [mail]="userEmail" (Event)="AddnewUser($event)"></app-child>
            <h1>
              {{username}}
            </h1>
       </div>
      </div>
     </div>
    
    `
})

export class ParentComponent {
    public userEmail: string = "Vs@gmail.com";
    public username: string;
    public AddnewUser(item) {
        console.log(item);
        this.username = item;
    }
}