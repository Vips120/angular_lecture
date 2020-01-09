import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CourseData } from './courseData';
import { StyleComponent } from './styleandclass.component';
import { HeartComponent } from './heart.component';
import { GenderComponent } from './gender.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { Employeecomponent } from './employee.component';
import { recordcomponent } from './record.component';
import { PropertyComponent } from './property.component';
import { UserComponent } from './user.component';
import { Userpipe } from './user.pipes';
import { Imagepipe } from './image.pipe';
import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import { Userdetails } from './userdetails.component';
import { Detailspips } from './details.pipes';
import { TemplateComponent} from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { routes} from "./apps.routes";
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule } from "@angular/common/http";
import { UsersignUpComponent } from './usersign-up/usersign-up.component';
import { UsersignInComponent } from './usersign-in/usersign-in.component';
import { Customdirective } from './directives/cust.directive';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StyleComponent,
    HeartComponent,
    GenderComponent,
    ParentComponent,
    ChildComponent,
    Employeecomponent,
    recordcomponent,
    PropertyComponent,
    UserComponent,
    Userpipe,
    Imagepipe,
    Userdetails,
    Detailspips,
    TemplateComponent,
    ReactiveComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    ProductsComponent,
    UsersignUpComponent,
    UsersignInComponent,
    Customdirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CourseData],
  bootstrap: [AppComponent]
})
export class AppModule { }
