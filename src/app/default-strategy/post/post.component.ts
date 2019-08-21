import { Component, OnInit, Input, ElementRef, AfterViewChecked, NgZone, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dcd-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

  @Input() post;
  @Input() template

  constructor (private el: ElementRef, private zone: NgZone) { }

}
