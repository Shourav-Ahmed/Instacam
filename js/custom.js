$(function(){
    
    
    // navbar bg
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('navbg');
        } else {
            $('.navbar').removeClass('navbg');
        }
    });
    
    //wow js
    new WOW().init();
  
    //venobox js
    $('.venobox').venobox();
    
    
    
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });
    
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    
        // team slider
    $('.slick-test').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow:'.left',
        nextArrow:'.right',
        speed: 1500,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
    },
            
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    }
  ]
    });
    
    
         // news-slider
    $('.news-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow:'.left-n',
        nextArrow:'.right-n',
        speed: 1500,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
    },
                        {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });   
    
    
    
    
    $('.back-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);

    });



    $(document).ready(function () {

        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();


            if (scrolling < 300) {
                $('.back-top').fadeOut(500);
            } else {
                $('.back-top').fadeIn(500);
            }

        });
    });
    
    
    $(window).on('load', function(){
        $('.preloading').delay(1500).fadeOut(1000);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});