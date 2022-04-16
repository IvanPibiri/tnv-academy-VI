import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/posts';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  filteredPosts: Post[] = []
  filter: string = '';

  constructor(private backendAPIService: BackendApiService, private router: Router) {
  
  }

  ngOnInit(): void {
    this.backendAPIService.getPosts().subscribe({
      next: (res) => this.filteredPosts = this.posts = res
    });
  }

  onTitleClick(event: number) {
    this.router.navigateByUrl(`/posts/${event}`)
  }

  applyFilter(event: Event) {
    this.filteredPosts = this.posts.filter(x => x.title.includes(`${event}`))
  }

}
