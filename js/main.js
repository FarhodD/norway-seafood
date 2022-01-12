$(function(){

    $(".header-slider").slick({
      dots: true,
      prevArrow:
        '<button type="button" class="slick-prev"><img src="./images/prev.svg" alt=""></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="./images/next.svg" alt=""></button>',
      vertical: true,
      responsive: [
        {
          breakpoint: 361,
          settings: {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
      ],
    });

     $(".product_name").slick({
       slidesToShow: 6,
       slidesToScroll: 1,
       focusOnSelect: true,
       asNavFor: ".product_content",
       vertical: true,
       prevArrow:
         '<button type="button" class="product-prev"><img src="./images/product-prev.svg" alt=""></button>',
       nextArrow:
         '<button type="button" class="product-next"><img src="./images/product-next.svg" alt=""></button>',

       responsive: [
         {
           breakpoint: 891,
           settings: {
             vertical: false,
             slidesToShow: 3,
             arrows: false,
             dots: true,
           },
           breakpoint: 671,
           settings: {
             vertical: false,
             slidesToShow: 1,
             arrows: false,
             dots: true,
           },
         },
       ],
     });

     $(".product_content").slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       asNavFor: ".product_name",
       fade: true,
       arrows: false
     });

     $(".menu_btn").on("click", function(){
       $(".menu_list").toggleClass("menu_list--active") 
     });

});