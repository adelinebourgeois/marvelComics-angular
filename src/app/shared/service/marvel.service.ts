import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MarvelService {
  private publicKey = '62ab7bb3c3875389d0380b111a03bd03';
  private hash = '45bb6c145445347f8675b8732a52ae7c';
  private baseUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(private http: Http) {}


  public getAllComics(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}comics?ts=1&limit=100&hasDigitalIssue=true&apikey=${this.publicKey}&hash=${this.hash}`)
        .map(this.extractData) //  will create a new array with the results of calling a provided function on every element in this array.
        .catch(this.handleError);
  }

  public getComicDetail(id: number): Observable<any[]> {
    return this.http.get(`${this.baseUrl}comics/${id}?ts=1&hasDigitalIssue=true&apikey=${this.publicKey}&hash=${this.hash}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  public getComicDetailCharacters(id: number): Observable<any[]> {
    return this.http.get(`${this.baseUrl}comics/${id}/characters?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

    public getComicDetailStories(id: number): Observable<any[]> {
        return this.http.get(`${this.baseUrl}comics/${id}/stories?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getAllCharacters(): Observable<any[]> {
        return this.http.get(`${this.baseUrl}characters?ts=1&limit=100&apikey=${this.publicKey}&hash=${this.hash}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /* GRAPHIC NOVEL */

    public getAllGraphicNovel(): Observable<any[]> {
      return this.http.get(`${this.baseUrl}comics?ts=1&limit=100&format=graphic%20novel&orderBy=-title&apikey=${this.publicKey}&hash=${this.hash}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getGraphicNovelDetail(id: number): Observable<any[]> {
        return this.http.get(`${this.baseUrl}comics/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getGraphicNovelDetailCharacters(id: number): Observable<any[]> {
        return this.http.get(`${this.baseUrl}comics/${id}/characters?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

  extractData(res: Response) {
    const body = res.json();
    return body.data.results || {};
  }

  handleError(error: any) {
    const errorMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'server error';
    return Observable.throw(errorMsg);
  }



}
