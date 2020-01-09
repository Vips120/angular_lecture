import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Iregister } from '../shared/model/userRegister';
import { UserRegister } from '../shared/services/user.register';
@Component({
  selector: 'app-usersign-in',
  templateUrl: './usersign-in.component.html',
  styleUrls: ['./usersign-in.component.css']
})
export class UsersignInComponent implements OnInit {
  public userRegister: FormGroup;
  public submitted: boolean = false;
  public Error: string;
  constructor(private fb: FormBuilder, private Register: UserRegister) { }

  ngOnInit() {
    this.userRegister = this.fb.group({
      "FirstName": ['', Validators.required],
      "LastName": ["", Validators.required],
      "EmailId": ["", Validators.required],
      "MobileNo": ["", Validators.required],
      "UserLogin": this.fb.group({
        "UserName": ["", Validators.required],
        "Password": ["", Validators.required]
      })
    })
  };

  UserRegisterForm(data: Iregister) {
    this.submitted = true;
   
    if (!this.userRegister.valid) {
      return;
    };
    this.Register.Registeration(data).subscribe( (item:any) => {
      if (!item.Error) {
        alert("Registraion done!")
      } else {
        alert("already registred user");
        this.Error = item.Error;
      }
     
     console.log(item);
   })
    // console.log(data);
  }

}
