import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs";




@Injectable()
export class MarvelService {
  private publicKey = '62ab7bb3c3875389d0380b111a03bd03';
  private hash = '45bb6c145445347f8675b8732a52ae7c';
  private baseUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(private http: Http) {}


  public getAllComics(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}comics?ts=1&hasDigitalIssue=true&apikey=${this.publicKey}&hash=${this.hash}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  public getComicDetail(id: number): Observable<any[]> {
    return this.http.get(`${this.baseUrl}comics/${id}?ts=1&hasDigitalIssue=true&apikey=${this.publicKey}&hash=${this.hash}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  public getComicDetailCharacters(id: number): Observable<any[]> {
    return this.http.get(`${this.baseUrl}comics/${id}/characters?apikey=${this.publicKey}&hash=${this.hash}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  extractData(res: Response) {
    let body = res.json();
    console.log(body.data.results);
    return body.data.results || {};
  }

  handleError(error: any){
    let errorMsg = (error.message) ? error.message:
        error.status ? `${error.status} - ${error.statusText}` : 'server error';
        console.log(errorMsg);
        return Observable.throw(errorMsg);
  }



}