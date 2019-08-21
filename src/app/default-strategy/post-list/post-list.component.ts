import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'dcd-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {

  posts;

  constructor (private postsService: PostService, private cd: ChangeDetectorRef) { }

  ngOnInit () {
    this.posts = {
      name1: 'Ravi',
      name2: 'venky',
    }
  }
  changeData () {
    this.posts = {
      name1: 'Ravi',
      name2: 'keerti',
    }
  }

  refChangeData () {
    this.posts = {
      name1: 'Ravi',
      name2: 'keerti',
    }
  }


  propertiesChangeData (e) {
    this.posts.name2 = "keerti123";
  }
}
