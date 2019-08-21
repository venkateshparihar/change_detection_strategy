import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OnPushStrategyRoutingModule } from './some-strategy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    OnPushStrategyRoutingModule
  ],
  declarations: [
    PostComponent,
    CommentListComponent,
    PostListComponent,
  ]
})
export class OnPushStrategyModule { }
