import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss']
})
export class PageTopComponent implements OnInit {

  @Input() title;
  pageTitle = '';

  constructor() { }

  ngOnInit() {
    this.pageTitle = this.title;
  }

}
