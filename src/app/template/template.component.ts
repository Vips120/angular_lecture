import { Component, OnInit } from '@angular/core';
import { Usertemplate} from "../shared/model/template";
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public Model = new Usertemplate();
  constructor() { 
    console.log("hello user");
  }

  ngOnInit() {
    console.log("hello user1");
  };

  Save(data) {
    console.log(data);
  }

}
