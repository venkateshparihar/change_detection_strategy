import { Component, OnInit, Input, ElementRef, AfterViewChecked, NgZone, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'dcd-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() post;
  @Input() template

  constructor (private el: ElementRef, private zone: NgZone, private cd: ChangeDetectorRef) { }

  ngOnInit (): void {
    this.post = this.post
  }
}
