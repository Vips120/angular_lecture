import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule} from "@angular/router";
import {contactroutes } from './contact/contact.routes';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactroutes)
  ]
})
export class ContactModule { }
