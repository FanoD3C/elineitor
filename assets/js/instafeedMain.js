"use strict"
let feed = new Instafeed({
    accessToken: 'IGQVJVOTYtUVVlLTRCS0dxeDZAybTVUZAVduYW9kbzl1ZAWtvNllMdmRibGE1NDU5VTVDOHd5R3UxZAldBbVBtQ2tDdWE5ZAmN2Tnl1V0VmUDAxNlpZARTR6dElBbWxRU2N2ZAEZAfaU1VbDNOMlQtaUdxUDMtVQZDZD',
    get: 'user',
        userId: '44782484749', 
    limit: 12,
    template: '<div class="img-instafeed center col-lg-12 col-md-6 col-xs-6 thumb"><a href="{{link}}"><img class="lazyOwl" title="{{caption}}" src="{{image}}" data-src="{{caption}}"  /></a> </div>',
          after: function(){
      $('.owl-carousel').owlCarousel({
                  loop:true,
        // lazyLoad:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        // itemsDesktop: [1199, 3],
        // itemsDesktopSmall: [979, 3],
                  margin:10,
        dots: true,
                //	nav:true,
        // navText:['<','>'],
                  responsiveClass:true,
                  responsive:{
                      0:{
                          items:2
                          
                      },
                      720:{
                          items:2,
            loop:true
                          
                      },
                      1000:{
                          items:3,							
                          loop:true
                      }
                  }
              });
          }
  });
  feed.run();