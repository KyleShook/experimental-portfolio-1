$( ".work-link" ).click(function() {
  $( ".transition").toggleClass( "anim-trans" );
});



var rect = $('.work-container')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$(".work-container").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".project-number", 30);
    parallaxIt(".container-test-1", -60);
    parallaxIt(".container-test-2", 40);
    parallaxIt(".container-test-3", -50);
    parallaxIt(".title", -5);
    
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.3, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('.work-container')[0].getBoundingClientRect();
})
/*
$('.silho-img').hover(function() {
  $('.work-container').css({});
});
$('.armin-img').hover(function() {
  $('.work-container').css({});
});


$('img').on('mouseout', function(){
  $('.work-container').css({"background-image":"none","opacity":"1"});
});
*/
 
new hoverEffect ({
    parent: document.querySelector('.container-test-1'),
    intensity1: 1,
    intesity2: 1,
    speedIn: 1,
    speedOut: 2,
    image1: '/images/Silhoette.jpg',
    image2: '/images/silho-3.png',
    displacementImage: '/images/displace001.jpg'
})
new hoverEffect ({
    parent: document.querySelector('.container-test-2'),
    intensity1: 1,
    intesity2: 1,
    speedIn: 1,
    speedOut: 1,
    image1: '/images/Armin.jpg',
    image2: '/images/armin-2.jpg',
    displacementImage: '/images/displace001.jpg'
})
new hoverEffect ({
    parent: document.querySelector('.container-test-3'),
    intensity1: 1,
    intesity2: 1,
    speedIn: 1,
    speedOut: 1,
    image1: '/images/Groovid.png',
    image2: '/images/Groovid-2.png',
    displacementImage: '/images/displace001.jpg'
})

new hoverEffect ({
    parent: document.querySelector('.container-test-4'),
    intensity1: 1,
    intesity2: 10,
    speedIn: 10,
    speedOut: 10,
    image1: '/images/nightk.jpg',
    image2: '/images/arya.jpg',
    displacementImage: '/images/displace001.jpg'
})

