import { Component, OnInit } from '@angular/core';
import { fromEvent } from "rxjs";
import { map,filter,debounceTime} from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let search = document.getElementById("search");
    let observer = fromEvent(search, "keyup")
      .pipe(
        map((e: any) => e.target.value),
        filter((text) => text.length >= 4),
        debounceTime(2000)
    );
    observer.subscribe(data => {
      console.log(data);
     })
  }

}
