import { Route} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductsComponent } from './products/products.component';
import { UsersignInComponent } from './usersign-in/usersign-in.component';
import { UsersignUpComponent } from './usersign-up/usersign-up.component';
import { Authguard } from './authguard/auth.guard';

export const routes: Route[] = [
    {
        path: "",
        component: HomeComponent,
        canActivate:[Authguard]
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate:[Authguard]
    },
    {
        path: "about",
        component: AboutComponent,
        children: [{
            path: "about1",
            component: About1Component
        },
            {
                path: "about2",
                component: About2Component
         }
        ]
    },
    {
        path: "product/:id",
        component: ProductsComponent
    },
    {
        path: "contact",
        loadChildren:"./contact/contact.module#ContactModule"
    },
    {
        path: "signin",
        component: UsersignInComponent
    },
    {
        path: "signup",
        component: UsersignUpComponent
    }
]