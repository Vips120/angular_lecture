import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Ilogin } from '../shared/model/userRegister';
import { UserRegister } from '../shared/services/user.register';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersign-up',
  templateUrl: './usersign-up.component.html',
  styleUrls: ['./usersign-up.component.css']
})
export class UsersignUpComponent implements OnInit {
  public userLogin: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private Login: UserRegister, private router: Router) { }

  ngOnInit() {
    this.userLogin = this.fb.group({
      "UserLogin": this.fb.group({
        "UserName": ["", Validators.required],
        "Password": ["", Validators.required]
      })
    });
  };

  Save(data: Ilogin) {
    this.submitted = true;
    if (!this.userLogin.valid) { return; }
    console.log(data);
    this.Login.Login(data).subscribe(item => {
      console.log(item);
      this.router.navigateByUrl("/home");
    })
  }

}
