import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostComponent} from '../post/post.component';
import {CommonModule} from '@angular/common';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  posts!: Post[];

  @Input() post!: Post;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.getAllPosts();
  }
}
