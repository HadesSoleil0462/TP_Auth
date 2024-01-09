import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {
      id: 456,
      title: 'First test post',
      author: 'bob',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl quis maximus',
      creationDate: new Date()
    },
    {
      id: 654,
      title: 'Second test post',
      author: 'alice',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl quis maximus',
      creationDate: new Date()
    },
    {
      id: 555,
      title: 'Third test post',
      author: 'admin',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl quis maximus',
      creationDate: new Date()
    }
  ];
  getAllPosts() {
    return this.posts;
  }
}
