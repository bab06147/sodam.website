$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );
//  top   //


$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });

// banner //

/*(function($) {
  $(document).ready(function() {
    $(window).scroll(function(){  
if($(this).scrollTop() > $('.overview').position()){
        $("overview_title").css({'opacity':'1','margin-left':'250px'})
        $(".overview_text").css({'opacity':'1'})
    }
*/

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_title').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'-50px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_text').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'50px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.Sg-title').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-top':'-100px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_title2').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'50px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_title3').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'50px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_text3').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'50px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_text2').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_title4').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'50px','opacity':'1'},1000);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_text4').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'0px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_title5').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'50px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_text5').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'padding-top':'-100px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_text6').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'padding-top':'100px','opacity':'1'},1000);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_title6').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'padding-top':'100px','opacity':'1'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_title7').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'0px','opacity':'1'},1000);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.overview_text7').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'0px','opacity':'1'},1000);
          }
          
      }); 
  });
});



/* 
$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img3').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},4000);
          }
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img2').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},3000);
          }
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},2000);
          }
      }); 
  });
});
*/

$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pt-title').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'500px'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pt-suv').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'200px'},1000);
          }
          
      }); 
  });
});
/* 
$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'350px'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img2').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'500px'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img3').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'500px'},1000);
          }
          
      }); 
  });
});
*/
$(document).ready(function() {
  $(window).scroll( function(){
      $('.phone-moc').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element/2){
              $(this).animate({'padding-right':'0px'},1000);
          }
          
      }); 
  });
});
/*
$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img2').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element){
              $(this).animate({'margin-left':'450px'},700);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.Pm-img3').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element){
              $(this).animate({'opacity':'275px'},1000);
          }
          
      }); 
  });
});

/*    VIDEO   */
$('.video').parent().click(function () {
	if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
	  }else{       $(this).children(".video").get(0).pause();
	$(this).children(".playpause").fadeIn();
	  }
  });

  var toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click' ,  show);

function show(){
	var sideBar = document.getElementById('side-bar');
	sideBar.classList.toggle('active');
}
//   VIDEO  //
