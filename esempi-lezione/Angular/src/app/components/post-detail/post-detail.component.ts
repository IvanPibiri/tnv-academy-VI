import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/posts';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId: number | null = null;
  notFound: boolean = false;
  post: Post | null = null;

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private backendAPIService:BackendApiService ) {
    activatedRoute.params.subscribe(val => {
      this.postId = +val['postId'];
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  navigate(amount: number) {
    if (this.postId) {
      const postId = this.postId + amount;
      this.postId = postId;
      this.router.navigateByUrl(`/posts/${postId}`);
      this.getData();
    }
  }

  private getData() {
    this.backendAPIService.getPost(this.postId).subscribe({
      next: (res) => this.post = res,
      error: (err) => this.notFound = true
    })
  }
}
