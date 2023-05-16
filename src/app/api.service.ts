import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsModule } from './posts/posts.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url principal 
  url:string = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
// DI
  constructor(private http:HttpClient) { }


  getPosts():Observable<PostsModule[]>{
// mappig flux json et object post 
      return this.http.get<PostsModule[]>(this.url+"/posts",this.httpOptions );

  }

}
