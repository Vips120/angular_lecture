import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Iregister, Ilogin } from '../model/userRegister';
import { map } from "rxjs/operators";
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({providedIn:"root"})
export class UserRegister {
    private REGISTER_ENDPOINT = "http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";
    private LOGIN_ENDPOINT = "http://mobile.test.acorsociety.com/ideators/api/users/userloginasync"
    public headers;
    private loggedInUser: BehaviorSubject<any>;
    public userData: Observable<any>;
    constructor(private http: HttpClient, private router: Router) { 
        this.headers = new HttpHeaders({ "Content-Type": "application/json" });
        this.loggedInUser = new BehaviorSubject(JSON.parse(localStorage.getItem("currentuser")));
        this.userData = this.loggedInUser.asObservable();
    }
    Registeration(data: Iregister) {
        return this.http.post(this.REGISTER_ENDPOINT, JSON.stringify(data), {headers: this.headers});
    };

    Login(data: Ilogin) {
        return this.http.post(this.LOGIN_ENDPOINT, JSON.stringify(data), { headers: this.headers })
            .pipe(map((item: any) => {
                if (item && item.UserLogin.JwtToken) {
                    localStorage.setItem("currentuser", JSON.stringify(item));
                    this.loggedInUser.next(item);
                } else {
                    return item;
                }
            })); 
    };

    Logout() {
        localStorage.removeItem("currentuser");
        this.loggedInUser.next(null);
        this.router.navigateByUrl("/signup");
    }
}