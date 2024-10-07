import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $ :any;
declare var jQuery:any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  ngOnInit() {
  /*=========================================================================
  Main Slider
=========================================================================*/
var owlSlider = $('#main-slider');
owlSlider.owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 500,
    autoplayTimeout: 3500,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    nav: true,
    navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']
});
// Slider animation
owlSlider.on('translate.owl.carousel', function () {
    $('.slider_content').removeClass('fadeInUp animated').hide();
});

owlSlider.on('translated.owl.carousel', function () {
    $('.owl-item.active .slider_content').addClass('fadeInUp animated').show();
});

var currentYear = (new Date()).getFullYear();
$(document).ready(function () {
    $("#year").text(currentYear);
});

/*=========================================================================
  Content Slider
=========================================================================*/
$('#content-slider').owlCarousel({
loop:true,
autoplay: true,
smartSpeed: 500,
dots: false,
items: 1,
nav:true,
navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']

});


/*=========================================================================
	Counter Up Active
=========================================================================*/
var counterSelector = $('.counter');
counterSelector.counterUp({
  delay: 10,
  time: 2000
});
     

 

  }





}
