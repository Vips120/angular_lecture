import { Component } from '@angular/core';
import { Iemployee } from './shared/model/employee';
@Component({
    selector: "app-employee",
    template: ` 
       <div class="container">
        <div class="row">
          <app-record [data]="employee" (user)="User($event)"></app-record>
        </div>
       </div>
    
    
    `
})

export class Employeecomponent {
    public employee: Iemployee[]= [{
        id: 1,
        name: "John Doe"
    }, {
        id: 2,
        name: "emma doe"
    },
    {
        id: 3,
        name: "kim doe"
    },
    {
        id: 4,
        name: "terry doe"
    }
       
    ];

    User(item :Iemployee) {
        this.employee.push(item);

    }
}