import { Component } from '@angular/core';
@Component({
    selector: "app-userdetails",
    template: `
     <div class="container">
      <div class="row">
       <div class="col-md-12">
        <input type="text" placeholder="search user" name="User" [(ngModel)]="User" class="form-control">
       </div>
       <div class="row">
         <div class="col-md-4" *ngFor="let d of details | Details: User">
         <div class="card text-white bg-primary" style="margin:5px 0px">
  <img class="card-img-top" src="{{d.thumbnailUrl}}" alt="">
  <div class="card-body">
    <h4 class="card-title">{{d.title}}</h4>
    <p class="card-text">{{d.id}}</p>
  </div>
</div>
         
         </div>
       </div>
      
      </div>
     </div>
    
    `
})

export class Userdetails {
    public User = "";
    public details = [{
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },
      {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
      }]
}