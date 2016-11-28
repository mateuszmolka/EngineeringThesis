import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service/auth.service";
import {User} from "../auth.service/user.model";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  user: User = {firstName: '', lastName: '', email: '', userName: '',password: '',type: ''};
  isMaster=null;

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
  this.authService.getCurrentUser()
   .subscribe((data)=>{
     //noinspection TypeScriptUnresolvedVariable
     //console.log(data.obj.email,data.obj.password,data.obj.userName);
     //noinspection TypeScriptUnresolvedVariable
     //noinspection TypeScriptUnresolvedVariable
     this.user=new User(data.obj.fistName,data.obj.lastName,data.obj.email,data.obj.userName,data.obj.password,data.obj.type);
     //noinspection TypeScriptUnresolvedVariable

     if(this.user.type==='Master designer'){
        this.isMaster=true;
     }
     else{
       this.isMaster=false;
     }
   });
  }


}
