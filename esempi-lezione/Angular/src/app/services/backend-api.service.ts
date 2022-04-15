import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpClient: HttpClient) { 

  }

  getPosts() {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts/');
  }

  getPost(postId: number | null) {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
