import { Component, OnInit } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

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
    if ($(window).width() <= 768) {
      console.log($(window).width())
      
      $('.nav-switch').on('click', (event) => {
        $('.main-menu').slideToggle(200);
        event.preventDefault();
      });
      $('a').on('click', (event) => {
        $('.main-menu').slideToggle(200);
        event.preventDefault();
      });
  }
    
  }

}
