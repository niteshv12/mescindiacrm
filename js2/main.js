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


    // testimonial-list  
    if ($('.slider-item-list').length > 0) {
      $('.slider-item-list').owlCarousel({
          items:1,
          loop:true,
          autoplay:false,
          autoplayTimeout:5000,
          animateOut: 'fadeOut',
          autoplayHoverPause: true,
          dots:true,
          nav:true,        
          navText:['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],          
          responsive:{
            280: {
              nav: false,
              dot: true,
            },      
          640: {
              nav: false,
              dot: true,
            },
          768: {
              dot: true,
            nav: false,
          } ,  
          1000: {
            nav: true,
          }  
        },   
      });
    } 


    // post-list Slider  
    if ($('.post-list-slider').length > 0) {
      $('.post-list-slider').owlCarousel({
          items:3,
          loop:true,
          margin: 30,
          autoplay:false,
          autoplayTimeout:5000,
          animateOut: 'fadeOut',
          autoplayHoverPause: true,
          dots:true,
          nav:true,        
          navText:['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],          
          responsive:{
            280: {
              nav: false,
              dot: true,
               items:1,
            },      
          640: {
              nav: false,
              dot: true,
            },
          768: {
              dot: true,
            nav: false,
             items:2,
          } ,  
          1000: {
             items:3,
            nav: true,
          }  
        },   
      });
    } 

    // post-list Slider  
    if ($('.team-member-slider').length > 0) {
      $('.team-member-slider').owlCarousel({
          items:4,
          loop:true,
          margin: 30,
          autoplay:false,
          autoplayTimeout:5000,
          animateOut: 'fadeOut',
          autoplayHoverPause: true,
          dots:true,
          nav:true,        
          navText:['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],          
          responsive:{
            280: {
              nav: false,
              dot: true,
               items:1,
            },      
          640: {
              nav: false,
              dot: true,
            },
          768: {
              dot: true,
            nav: false,
             items:2,
          } ,  
          1000: {
             items:4,
            nav: true,
          }  
        },   
      });
    } 


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


  // Bar-Graph
  if($('#bargraph').length > 0){
    var ctx = document.getElementById('bargraph');
    var bargraph = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct"],
            datasets: [
                {
                  label: "Data Chart",
                  backgroundColor: [
                    '#fe81d3',
                    '#76d6db',
                    '#fe81d3',
                    '#76d6db',
                    '#fe81d3',
                    '#76d6db',
                    '#fe81d3',
                    '#76d6db',
                    '#fe81d3',
                    '#76d6db',
                    '#fe81d3',
                    '#76d6db',
                    '#fe81d3',
                    '#76d6db',
                    '#fe81d3',
                    '#76d6db',
                  ],
                  borderWidth: 0,
                  data: [70, 100, 80, 81, 56, 55, 60, 60, 70, 100, 100, 70, 50, 100],
                }
            ]
        }
    });     
  }    


  // Skills-graph
  if($('#skills').length > 0){
    var ctx = document.getElementById('skills');
    var Skills = new Chart(ctx,{
        type: 'pie',
        data: {
        labels: $('#skills').data('label'),
          datasets: [
              {
                  data: [50, 75, 50],
                  backgroundColor: [
                      "#F560D8",
                      "#69D2CB",
                      "#7294C6"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
            }
      }); 
    }

 
 //Circlegraph
  if($('#circlegraph').length > 0){ 
    var ctx = document.getElementById('circlegraph');
    var Circlegraph = new Chart(ctx,{
        type: 'doughnut',
        data: {        
        labels: [
              "Red",
              "Blue",
              "Yellow"
              ],
          datasets: [
              {
                  data: [50, 50, 50],
                  backgroundColor: [
                      "#red",
                      "#A4C46D",
                      "#7294C6"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
            }
      });
  }

   


    
}); //end ready