import { Component } from '@angular/core';
@Component({
    selector: "app-user",
    template: `
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul *ngIf="User">
              <li>{{User.name | uppercase | lowercase}}</li>
              <li>{{User.salary | currency:"EUR"}}</li>
              <li>{{User.rank | number}}</li>
              <li>{{User.fltno | number:"2.2-2"}}</li>
              <li>{{User.date | date:"MM/dd/yyyy"}}</li>
              <li>{{User | json}}</li>
            </ul>
            <p>{{content | usercontent:30}}</p>
            <input type="text" class="form-control" name="username" placeholder="search"
              [(ngModel)]="username"
            >
            {{username}}
            <img src="{{imgUrl |imgagepipe:'':false}}">
           
          </div>
        </div>
      </div>
    `
})

export class UserComponent {
    public username;
    public User = {
        name: "vipul",
        salary: 500000,
        rank: 5458545566,
        fltno: 9.69782,
        date: new Date()
    };
    public content = "India's biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Jewelry, Home, Furniture, Sporting goods, Beauty ";
    public imgUrl = "http://lorempixel.com/400/200/";
}