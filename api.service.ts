import { Posts } from './post';
import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }
  getcomment():Observable<any>{
  return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  }
  getcmmentbyparameter():Observable<any>{
    let params1=new HttpParams().set('userId',"1");
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts',{params:params1})
  }
  post(opost:Posts):Observable<any>{
 return this.httpclient.post('https://jsonplaceholder.typicode.com/posts', opost);
  }
}
