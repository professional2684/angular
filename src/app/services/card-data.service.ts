import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  cardAPI = "https://6296884257b62586060fd8ff.mockapi.io/cardlist"
  detailAPI = "https://6296884257b62586060fd8ff.mockapi.io/carddetail"

  pCardAPI = "http://127.0.0.1:8000/UsersApp/card-list/" // local API
  pCardDetailAPI = "http://127.0.0.1:8000/UsersApp/card-detail/" // local API

  constructor(private http: HttpClient) { }

  // Observable for subscribing data for all components
  getCards(): Observable<any>{
    return this.http.get(this.cardAPI);
  }

  getCardById(id: number): Observable<any>{
    let card = new HttpParams().set("id",id);
    return this.http.get(this.detailAPI,{params:card});
  }

  // Using local API to get details
  getCardsLocal(): Observable<any>{
    return this.http.get(this.pCardAPI)
  }

  getCardByIdLocal(id: number): Observable<any>{
    let card= new HttpParams().set("id",id);
    return this.http.get(this.pCardDetailAPI+id);
  }

}
