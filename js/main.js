/*
 Project Name :   Investment Expert
 Author Company : Themeperch
 Project Date:    28-08-2016
 Author Website : http://themeperch.net/

1. Sticky Header 
2. Isotope
3. Google Map
4. ResponsiveTabs
5. Sectionize-Control 
6. MagnificPopup
7. Tablesorter
8. Sidebar Menu
9. Tab Using Plus Minus  Icon 

 */

jQuery( document ).ready(function($) {
      "use strict"
    // Isotope
   var $container = $('.isotope');
    // filter buttons
    $('.filters a').click(function(){
    var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('active') ) {
          $this.parents('.options').find('.active').removeClass('active');
          $this.addClass('active');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({ filter: '.'+selector });
      return false;
    })

  function isotope() {
    $('.isotope').isotope({
        itemSelector : '.item',
        layoutMode: 'masonry',
        filter: '.energy',
        masonry: {
          gutter: 2
        }
    });
  }

  setTimeout(isotope, 1000);  
    // Tab
    $('#careerTab a:first').tab('show')

    //  Sticky Header 
     $(".navbar ").sticky({topSpacing: 0});
     //  Sticky Header 

     // Google Map
     function gmap_initilize(){
        // google-map Chicago
          if ($('.gmap-canvas').length > 0) {
            $('.gmap-canvas').each(function(){
              var mapID = $(this).attr('ID');
              var pos = {
                lat: $(this).data('lat'),
                lng: $(this).data('long')
              };


              var map = new google.maps.Map(document.getElementById(mapID), {
                zoom: $(this).data('zoom'),
                center: pos,
                scrollwheel: false
              });

              var image = 'images/map-marker.png';
              var beachMarker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: image
              });
              map.set('styles', [
                {
                  featureType: 'Greyscale',
                  stylers: [
                    {
                      saturation: -90
                },
                    {
                      gamma: 1.5
                }]
              }]);

            })
          }
     }
     /*gmap_initilize*/  
     gmap_initilize();
     $( 'ul.nav.nav-tabs  a' ).click( function ( e ) {
        e.preventDefault();
        $( this ).tab( 'show' );
        gmap_initilize();
      });

     // ResponsiveTabs
      ( function( $ ) {
          // Test for making sure event are maintained
          $( '.js-alert-test' ).click( function () {
            alert( 'Button Clicked: Event was maintained' );
          } );
          fakewaffle.responsiveTabs( [ 'xs', 'sm' ] );
      } )( jQuery );

     // Sectionize-Control 
      if ($('select').length > 0) {
        $('select').selectize({
          create: true,
          sortField: {
            field: 'text',
            direction: 'asc'
          },
          dropdownParent: 'body'
        });
      }

    // MagnificPopup
    $('.post, .testimonials').magnificPopup({
      delegate: '.full-size',
      type: 'image',
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        easing: 'ease-in-out',
        duration: 300,
        opener: function(element) {
          return element.closest('.post-image-holder, .testimonials-image-holder').find('img');
        }
      }
    });

    /*Tablesorter*/
    $(function(){
      $("#myTable").tablesorter({
        theme : 'gray',

        sortList : [[1,0],[2,0],[3,0]],

        // header layout template; {icon} needed for some themes
        headerTemplate : '{content}{icon}',

        // initialize column styling of the table
        widgets : ["columns"],
        widgetOptions : {
        // change the default column class names
        // primary is the first column sorted, secondary is the second, etc
        columns : [ "primary", "secondary", "tertiary" ]
        }
      });
    });

    //Sidebar Menu
   var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
     $(".menu-sidebar li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).parent().addClass("active");
     })




  //contact form scripts
  $('#contact-form').submit(function( event ) {

    
    $.ajax({
      url: 'php/contactformsubmit.php',
      data: $( this ).serialize(),
      method: 'post',
    }).done(function(response) {
        $('#contact-form input[type="submit"]').after(response);
    });

    return false;
  });
   


    
}); //end ready