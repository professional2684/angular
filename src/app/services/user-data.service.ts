import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserFormat } from '../APIformat/userformat';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userAPI = "https://6296884257b62586060fd8ff.mockapi.io/users"

  //userAPI = "http://127.0.0.1:8000/UsersApp/user-detail/"

  constructor(private http: HttpClient) { }

  // Observable for subscribing data for all components
  getUsers(): Observable<any>{
    return this.http.get(this.userAPI);
  }

  //getUserByName(username: string): Observable<any>{
  getUserByName(username: string): Observable<any>{

    let user = new HttpParams().set("username",username);
    return this.http.get(this.userAPI,{params:user});
    //return this.http.get(this.userAPI+username);
  }

  saveUser(data: UserFormat){
    return this.http.post(this.userAPI, data)
  }
}
