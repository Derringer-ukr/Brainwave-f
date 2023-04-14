let sliderNews = $('.slider');
sliderNews.slick({
    dots: true,
    infinite: true,
    speed: 140,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    
  ]
})
