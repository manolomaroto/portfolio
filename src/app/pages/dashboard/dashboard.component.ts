import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.jqueryCode();
  }

  jqueryCode(): void {

  /*------------------
		Background set
	--------------------*/
  document.querySelectorAll('.set-bg').forEach((el) => {
    const bg = el.getAttribute('data-setbg');
    console.log(bg);
    el.setAttribute('style', `background-image: url(${bg})`);
  });



  /*----------------------
		Portfolio layout
	------------------------*/
  const portFi =  $('.portfolios-area .first-item');
  const  portSi =  $('.portfolios-area .second-item');
  const  portIntroH =  $('.portfolio-intro').innerHeight();

  if ($(window).width() > 991) {
    portFi.appendTo('.portfolio-intro');
    portSi.find('.portfolio-item').height(portIntroH + 601);
  }

  $('.portfolio-item.pi-style2').each(() => {
    const piWidth = $(this).width();
    $(this).height(piWidth + 50);
  });
  /*------------------
      Popup
    --------------------*/
  $('.portfolio-item').magnificPopup({
      type: 'image',
      mainClass: 'img-popup-warp',
      removalDelay: 400
    });
  /*------------------
		Accordions
	--------------------*/
  $('.panel-link').on('click', (e) => {
    $('.panel-link').parent('.panel-header').removeClass('active');
    const $this = $(this).parent('.panel-header');
    if (!$this.hasClass('active')) {
      $this.adhdClass('active');
  }
    e.preventDefault();
  });
  }
}
