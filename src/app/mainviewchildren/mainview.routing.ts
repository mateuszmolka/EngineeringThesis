import { Routes, RouterModule } from "@angular/router";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {UserComponent} from "./user/user.component";
import {WelcomePageComponent} from "./welcome-page.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {ShowUsersComponent} from "./show-users/show-users.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {TestComponentComponent} from "./test-component/test-component.component";


export const MAIN_ROUTES: Routes = [
  { path: '',
    redirectTo: 'welcome',
    pathMatch: 'full' },
  { path: 'welcome',
    component: WelcomePageComponent },
  { path: 'user-create',
    component: CreateUserComponent },
  { path: 'user-current',
    component: UserComponent },
  { path: 'user-show',
    component: ShowUsersComponent },
  { path: 'user-profile/:username',
    component: UserProfileComponent
    },
  { path: 'test',
    component: TestComponentComponent
  },
  { path: '**',
   component: PageNotFoundComponent }


  // { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];
