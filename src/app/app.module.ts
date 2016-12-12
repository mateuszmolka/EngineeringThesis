import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import {AuthService} from "./auth.service/auth.service";
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainviewComponent } from './mainview/mainview.component';
import {routing} from "./app.routing";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './mainviewchildren/user/user.component';
import { WelcomePageComponent } from './mainviewchildren/welcome-page.component';
import { CreateUserComponent } from './mainviewchildren/create-user/create-user.component';
import { ShowUsersComponent } from './mainviewchildren/show-users/show-users.component';
import { UserOneComponent } from './mainviewchildren/user-one/user-one.component';
import { UserProfileComponent } from './mainviewchildren/user-profile/user-profile.component';
import {Ng2UploaderModule} from "ng2-uploader";
import { TestComponentComponent } from './mainviewchildren/test-component/test-component.component';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SideBarComponent,
    MainviewComponent,
    PageNotFoundComponent,
    UserComponent,
    WelcomePageComponent,
    CreateUserComponent,
    ShowUsersComponent,
    UserOneComponent,
    UserProfileComponent,
    TestComponentComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    Ng2UploaderModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
