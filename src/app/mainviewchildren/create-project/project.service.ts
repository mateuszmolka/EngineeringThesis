import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Project} from "./project.model";

@Injectable()
export class ProjectService {
  constructor(private _http: Http) { }

  createUser(project: Project){
    console.log(project);
    const body = JSON.stringify(project);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('http://localhost:3000/project/create', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
