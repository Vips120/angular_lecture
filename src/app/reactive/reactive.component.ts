import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Regx } from './regx';
import {Ireactive } from "../shared/model/reactive";
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      "username": ['', [Validators.required, Validators.minLength(5), Regx.Username]],
      "password": ["", [Validators.required,Regx.Password]],
      "email": ["", [Validators.required,Regx.Email]],
      "UserLogin": this.fb.group({
        "userid": ["", [Validators.required,Regx.Userid]],
        "mobileNo":["",[Validators.required, Regx.MobileNo]]
      })
    })
  };
  Save(item: Ireactive) {
    console.log(item);
  }

}
