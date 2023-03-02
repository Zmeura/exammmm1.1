$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    swipe: true,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          dots: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".n-slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    swipe: true,
    dotsClass: "n-slider__dots",

    responsive: [
      {
        breakpoint: 1380,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
