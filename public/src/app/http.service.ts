import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 


  }


getArticles(){
  return this._http.get('https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=59aa4ebf2be14678983ba3d6e69a1e86')
}

}
