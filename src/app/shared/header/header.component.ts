import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.jqueryCode();
  }

  jqueryCode(): void{
    $('.nav-switch').on('click', (event) => {
      $('.main-menu').slideToggle(400);
      event.preventDefault();
    });
  }

}
