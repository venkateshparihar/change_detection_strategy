import { Component, OnInit, Input, Output, EventEmitter, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dcd-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit {

  @Input() comments
  @Input() template
  newComment

  constructor (private el: ElementRef, private zone: NgZone) { }

  ngOnInit () {
  }

  ngAfterViewChecked (): void {

    this.el.nativeElement.classList.add('highlight')
    setTimeout(() => {

      console.log('check detection123');
      this.el.nativeElement.classList.remove('highlight')
    }, 1500)
  }
  ngDoCheck (): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('check detection');
  }


}