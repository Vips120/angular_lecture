import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productId;
  constructor(private AR: ActivatedRoute,private router: Router) {}
  ngOnInit() {
    this.AR.params.subscribe(data => {
      this.productId = data['id'];
    });
  };
  Goback() {
    this.router.navigateByUrl("/about");
  }
}
