import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../shared/services/user.register';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public currentUserdata;
  constructor(private userRegister: UserRegister) { }

  ngOnInit() {
   this.userRegister.userData.subscribe(x => {
     this.currentUserdata = x;
     console.log(this.currentUserdata);
    })
  }
  Logout() {
    this.userRegister.Logout();
  }
}
