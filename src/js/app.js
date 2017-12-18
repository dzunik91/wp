import '../styles/styles.scss';

//import '../favicon.ico'
import '../img/kadra-bg.png';
import '../img/logo.png';
import '../img/foto-slider1.jpeg';
import '../img/foto-slider2.jpg';
import '../img/foto-slider3.jpg';
import '../img/bg-section.png';


import $ from 'jquery';
import slick from 'slick-carousel';
import AOS from 'aos';


$('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    autoplay: true,
    arows: false,
    autoplaySpeed: 5000,
    responsive: [
       { 
           breakpoint: 768,
           settings: {
            dots: false
            }
        }
    ]
});

$('.gallery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
       { 
           breakpoint: 768,
           settings: {
            dots: false
            }
        }
    ]
});


$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

{
    let parentDivs =  document.querySelectorAll('.img-data');
    const parentDivsArray = [...parentDivs];
    let magic =  parentDivsArray.map((parentDiv) => {
        let imageSrc =  parentDiv.dataset.src;
        let styleString =  `background: url(${imageSrc}) center no-repeat`
       return parentDiv.setAttribute('style', styleString);
    })

};


AOS.init({
    duration: 1200,
  })