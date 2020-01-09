import { Component, OnInit } from '@angular/core';
import { PostServices } from '../shared/services/post.services';
import { Ipost } from '../shared/model/posts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public posts:Ipost;
  public products = [{
    id: 1,
    name: "Angular"
  },
  {
    id: 2,
    name: "Rectjs"
  },
  {
    id: 3,
    name: "NODEJS"
  }
  ];
  constructor(private postservices: PostServices) { }

  ngOnInit() {
    this.postservices.FetchPoserUser().subscribe(item => {
      // console.log(item);
      this.posts = item;
    })
  }

}
