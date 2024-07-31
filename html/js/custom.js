/* -----| script |-------*

 * 01. Mobile call

 * 02. Mobile Filter

 * 03. Km. Select Dropdown

 ** 3.1 Mobile view Km select jQuery Ui destroy 

 * 04. Search Auto Suggess

 * 05. Location Search Auto Suggess

 * 06. Home Main Slider

 * 07. Category Add Banner Slider

 * 08. Masonry Category List

 * 09. Scroll back to top

 * 10. FAQ Accordions 

 */





$(document).ready(function() {  


/* Mobile menu */  

$('.menuIcon').click(function() {

        $(this).toggleClass('menu-close');

        $('.navigationBar').toggleClass('slideMenu');

        $('body').addClass('bodyFixed');

    });


$('.sidebar-overlay, .closeMenu').click(function() {

        $('.menuIcon').removeClass('menu-close');

        $('.navigationBar').removeClass('slideMenu');

        $('body').removeClass('bodyFixed');


  });



$('.menuMain li:has(ul)').prepend('<span class="arrow"></span>'); 

$('.arrow').click(function() {  

  $(this).siblings('ul').slideToggle('slow'); 

  $(this).toggleClass('minus'); 

});

$('.mob_filter').click(function(){
  $('.sidebarDiv').addClass('openFilter');
  $('body').addClass('bodyFixed');   
});

$('.sidebarTitle').click(function(){
  if($('.sidebarDiv').hasClass('openFilter')){
    $('.sidebarDiv').removeClass('openFilter');
    $('body').removeClass('bodyFixed');   
  }   
});

$('.homeSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  fade: true
});


$('.shoprodslide').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {

      breakpoint: 670, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }

    }
  ]

  });

$('.galleryMain').slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    autoplay: true,
    asNavFor: '.galleryThumb',
    fade: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 767,
            settings: {              
              dots:true,
              arrows: true,
              autoplay: true
            }
        }
    ]

});


$('.galleryThumb').slick({
    slidesToShow:5,
    infinite: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
   // autoplaySpeed: 5000,
    asNavFor: '.galleryMain',
    arrows: false,
    //vertical: true,
    //verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
             slidesToShow:4              
            }
        },
        {
            breakpoint: 991,
            settings: {
             slidesToShow:4
            }
        },
        {
            breakpoint: 767,
            settings: {
             slidesToShow:4,
              vertical: false,
              verticalSwiping: false,
              dots:false,
              arrows: false,
            }
        },
        {
            breakpoint: 666,
            settings: {
             slidesToShow:4,
              vertical: false,
              verticalSwiping: false,
              dots:false,
              arrows: false,
            }
        },
    {
      breakpoint: 479, 
      settings: {
        slidesToShow:4,
        vertical: false,
        verticalSwiping: false,
        dots:false,
        arrows: false,
      }
    },
    {
      breakpoint: 350, 
      settings: {
        slidesToShow:3,
        vertical: false,
        verticalSwiping: false,
        dots:false,
        arrows: false,
      }
    }
    ]
});

 /* QTY field */  
  $(document).on("click",".qtyplus",function(e) {
    e.preventDefault();
    var currentVal = parseInt($('#quantityField').val());
    if (!isNaN(currentVal)) {
      $('#quantityField').val(currentVal + 1);
    } else {
      $('#quantityField').val(1);
    }
  });
    
  $(document).on("click",".qtyminus",function(e) {
    e.preventDefault();
    var currentVal = parseInt($('#quantityField').val());
    if (!isNaN(currentVal) && currentVal > 1) {
      $('#quantityField').val(currentVal - 1);
    } else {
      $('#quantityField').val(1);
    }
  });

$('.testimonslid').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendArrows: '.tesslideArrows',
    arrows: true,
    autoplay: true,
    responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }

    }
  ]

  });


$('.bloglistmain').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {

      breakpoint: 670, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }

    }
  ]

  });

// jQuery(".footBox h3").click(function(e){
//     if(jQuery(window).width() <= 767){
//       jQuery(this).toggleClass("open");
//       jQuery(this).next().addClass("toggler").slideToggle();
//     }

//   });

$('.counter').countUp();


/*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/

$('.scrollTop').click(function() {

    $('html, body').animate({scrollTop: 0}, 800);

    return false;

});



$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {

        $('.scrollTop').fadeIn();

        $('.headerMain').addClass('has_sticky');

    } else {

        $('.scrollTop').fadeOut();

        $('.headerMain').removeClass('has_sticky'); 

    }

}); 


/* ------| A. Svg Rendering In Browser |--------- */



function svgConvert(svgClass) {

    $(svgClass).each(function() {        

        var $img = $(this);

        var imgID = $img.attr('id');

        var imgClass = $img.attr('class');

        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {

          /* Get the SVG tag, ignore the rest */

          var $svg = $(data).find('svg');

          /* Add replaced image's ID to the new SVG */

          if (typeof imgID !== 'undefined') {

              $svg = $svg.attr('id', imgID);

          }

          /* Add replaced image's classes to the new SVG */

          if (typeof imgClass !== 'undefined') {

              $svg = $svg.attr('class', imgClass + ' svgIcon');

          }

          $svg = $svg.attr('fill', 'currentColor');

          /* Remove any invalid XML tags as per http://validator.w3.org */

          $svg = $svg.removeAttr('xmlns:a');

          /* Replace image with new SVG*/

          $img.replaceWith($svg);

      }, 'xml');

    });

}

});