import { Component,Input,Output, EventEmitter } from '@angular/core';
@Component({
    selector: "app-child",
    template: `
    <div class="container">
    <div class="row">
     <div class="col-md-12">
          <h1>CHILD SECTION:</h1>
          <h2>{{mail}}</h2>
     </div>
     <div class="col-md-12">
      <button type="button" class="btn btn-danger btn-md"
       (click)="AddUser()"
      >CLiCk</button>
     </div>
     <div class="col-md-12">
        <input type="text" class="form-control" placeholder="Enter username"
         #username
        >
        <button type="button" class="btn btn-danger btn-md"
        (click)="Add(username)"
       >CLiCk</button>
       
     </div>
    </div>
   </div>
    
    
    
    `
})

export class ChildComponent {
    @Input() public mail: string;
    public user = "VIpul";
  @Output() public Event = new EventEmitter();
    public AddUser() {
        this.Event.emit(this.user);
    };
    Add(item) {
        console.log(item.value);
    }
}