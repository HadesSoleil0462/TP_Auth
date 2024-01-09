import {Component, LOCALE_ID, OnInit} from '@angular/core';
import { Post } from './models/post.model';
import {PostListComponent} from './post-list/post-list.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [PostListComponent, HeaderComponent],
  styleUrl: './app.component.scss',
  providers: [{provide: LOCALE_ID, useValue: 'en-US'}]
})

export class AppComponent implements OnInit {

  posts!: Post[];

  ngOnInit() {}
}
