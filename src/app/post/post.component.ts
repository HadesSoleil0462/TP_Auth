import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../models/post.model';
import {UpperCasePipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  ngOnInit() {
  }
}
