import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ipost} from "../model/posts";
import { Observable } from 'rxjs';
@Injectable({providedIn:"root"})
export class PostServices {
    private POST_ENPOINT = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http: HttpClient) { }
    FetchPoserUser():Observable<Ipost> {
        return this.http.get<Ipost>(this.POST_ENPOINT);
    }
}