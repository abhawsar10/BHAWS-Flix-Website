import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageInfoService {

  constructor(private httpClient: HttpClient) { }

  
 //private API_SERVER = "http://127.0.0.1:8080/apis/endpoints";
 private API_SERVER = "https://abhawsar.uc.r.appspot.com/apis/endpoints";


  public sendGetRequest(route:string){
    return this.httpClient.get(`${this.API_SERVER}/${route}`);
  }

  private PARAMS = new HttpParams({
    fromObject: {
      q:''
    }
  });

  search_movie_endpoint(term: string) {
    
    if (term.length == 0) {
      return of([]);
    }
    return this.httpClient.get<[any, string[]]>(this.API_SERVER+"/search", {params: this.PARAMS.set('q', term)});
  }


}
