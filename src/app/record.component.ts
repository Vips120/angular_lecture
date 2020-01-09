import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Iemployee } from './shared/model/employee';
@Component({
    selector: "app-record",
    template: `
      <div class="container">
       <div class="row">
        <div class="col-md-12">
    <ul *ngFor="let d of data">
    <li>{{d.id}}</li>
    <li>{{d.name}}</li>
    </ul>
       <div class="form-group">
         <input type="text" placeholder="enter id" #id class="form-control">
       </div>  
       <div class="form-group">
        <input type="text" placeholder="enter name" #name class="form-control">
       </div>  
       <button type="button" class="btn btn-danger btn-md" 
        (click)="AddUser(id, name)"
       >Submit</button>
        </div>
       
       </div>
      </div>
    
    `
})

export class recordcomponent {
    @Input() public data: Iemployee[];
    @Output() public user = new EventEmitter<Iemployee>();
    AddUser(id, name) {
        this.user.emit({ id: id.value, name: name.value });
        id.value = "";
        name.value = "";

    }
}