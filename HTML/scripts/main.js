'use strict';
$(document).ready(function() {
	
	var wWidth = $(window).width();

	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
   	

  	/* ------------------ blog page ------------------*/
    blogdetails(); 
	function blogdetails(){
		if(!is_explorer){
			window.requestAnimationFrame(blogdetails);
		}
		var blogHeight= $('.blog-figc').outerHeight();
		$('.blog-containers').css('height' ,blogHeight );
		var blogHeights= $('.blgpg .blog-figc').outerHeight();
		$('.blgpg .blog-containers').css('height' ,blogHeights );
	}
	
    
	/*----------------- NAV BUTTON -----------------*/
	$('.button-nav').on('click' , function(e){
		if(wWidth >= 768){
			$('.nav-menu').addClass('nav-menu-open');

		}else{
			$('.nav-menu').css('right','0%');
		}
		$.fn.fullpage.setMouseWheelScrolling(false);
		$('body').css('overflow-y','hidden');
		e.stopPropagation();
	});
			
	$('body .homep').on('click' , function(){
		closeMenu();
		$.fn.fullpage.setMouseWheelScrolling(true);
	});
			
			
	$('.header').on('click' , '.nav-menu.nav-menu-open', function(event){
		event.preventDefault();
		event.stopPropagation();
	});
	
	
	$('.homep .close-btn').on('click', function(){
		closeMenu();
		$.fn.fullpage.setMouseWheelScrolling(true);
	});
	$('.homep .header .navbar-wrapper li a').on('click', function(){
		closeMenu();
		$.fn.fullpage.setMouseWheelScrolling(true);
	});
	$(' .close-btn').on('click', function(){
		closeMenu();
	});
	$('.header .navbar-wrapper li a').on('click', function(){
		closeMenu();
	});

	function closeMenu(){
		if(wWidth >= 768){
			$('.nav-menu').removeClass('nav-menu-open');
		}else{
			$('.nav-menu').css('right' , '-110%');
		}
		
		$('body').css('overflow','visible');
	}


	/*-------------- Inner page menu responsve---------------*/
	$('.navbar-header').on('click' , function(){
		var wh = $(window).height(); 
		$('.wrapper-body , .nav-menu').css('max-height' , wh );
		$('.wrapper-body').css('overflow' ,'hidden' );
		$('.nav-menu').addClass('open-mobile-menu');
		$('.overlay').addClass('overlay-open');
		$('body').css('overflow','hidden');
	});
	$('.close-menu').on('click' , function(){
		mobileclosemenu();
	});
	$('.servicepage .nav li a').on('click', function(){
		mobileclosemenu();

	});
	$('.homep.close-menu').on('click' , function(){
		mobileclosemenu();
		$.fn.fullpage.setMouseWheelScrolling(true);
	});
	$('.homep .servicepage .nav li a').on('click', function(){
		mobileclosemenu();
		$.fn.fullpage.setMouseWheelScrolling(true);

	});

	function mobileclosemenu(){
		$('.nav-menu').removeClass('open-mobile-menu');
		$('.overlay').removeClass('overlay-open');
		
		$('body').css('overflow','visible');
		$('.wrapper-body , .nav-menu').css('max-height' ,'auto');
		$('.wrapper-body').css('overflow' ,'visible' );

	}

	/*---------------- full page scroll -----------------*/	
	if ($('.one-home-page').length) {
		
		$('#home-menu').fullpage({
			responsiveWidth:1200,
			anchors:['mainPage', 'aboutPage' , 'servicepage' , 'workpage' , 'teampage' , 'careerpage', 'blogpage' ,'contactpage'],
			recordHistory:true,
			menu: '#menu',
			touchstart:false,
			fitToSection: true,
			scrollbar:true,					// responsive: true,
			resize: true,
			offset: 500,
			easing: 'easeInOutCubic',
			css3: true,
			fixedElements: '.header , .footer',
			normalScrollElements: '#work-menu , #team-menu , #blog-menu ,#service-menu ',
		    normalScrollElementTouchThreshold:0,
		    touchSensitivity: 100,


			afterLoad:function(anchorLink ,slideIndex ){

				if($(window).width() >=992){
					if(anchorLink == 'servicepage' ){
						$('.service-inner.fig1').css({'left' :'0px' , 'top':'-69px'});
						$('.service-inner.fig2').css('left' ,'10px' );
						$('.service-inner.fig3').css({'left' :'50px' , 'bottom':'-115px'});
						$('.service-inner.fig4').css('bottom', '-115px');
						$('.service-inner.fig5').css('right', '48px');
					}
				}
					
			}	

		});

		$.fn.fullpage.reBuild();
		
		
	/*---------------------- scrolldown ------------- */		
		$('#go').on('click' , function(){
		    $.fn.fullpage.moveSectionDown();
		});
	
		$('.work-fig .grid').masonry({
		  // options...
		  itemSelector: '.grid-item',
		  gutter:15

		});
	/* --------------------prev  Next page ---------------*/

		$(window).on('resize', function() {
			blogdetails(); 	
		});
	}
	
	$(function(){
		$('#workimg').addClass('scaleImg');
	});

	/*------------ animation mouse over --------------- */
    if (!is_safari && wWidth  >= 1200){
		var $parallaxContainer 	  = $('#about-mouse'); //our container
		var $parallaxItems		    = $parallaxContainer.find('.parallax');  //elements
		var fixer				          = 0.0008;		//experiment with the value

		$('#about_page').on('mousemove', function(event){				
			var pageX =  event.pageX - ($parallaxContainer.width() * 0.9);  //get the mouseX - negative on left, positive on right
			var pageY =  event.pageY - ($parallaxContainer.height() * 0.9); //same here, get the y. use console.log(pageY) to see the values
			//here we move each item
			$parallaxItems.each(function(){
				var item 	= $(this);
				var speed	= item.data('speed');  //getting the speed from data atribute
				TweenLite.to(item, 0.5, {
					x: (item.position().left + pageX * speed )*fixer,    //calculate the new X based on mouse position * speed 
					y: (item.position().top + pageY * speed)*fixer
				});
				var blurElement = {a:0};//start the blur at 0 pixels
				function applyBlur()
				{ TweenMax.set($('.main-img'), {webkitFilter:'blur('+ blurElement.a + 'px)'}); }		
				TweenMax.to(blurElement,2, {a:10, onUpdate:applyBlur});
					//here you pass the filter to the DOM element
			});
		});	

		// homepage
		var $parallaxContainerH 	  = $('#home-mouse'); //our container
		var $parallaxItemsH		    = $parallaxContainerH.find('.parallaxHome');  //elements
					
		$('#sectionHome').on('mousemove', function(event){	
			var pageX =  event.pageX - ($parallaxContainerH.width() * 0.9);  //get the mouseX - negative on left, positive on right
			var pageY =  event.pageY - ($parallaxContainerH.height() * 0.9); //same here, get the y. use console.log(pageY) to see the values
			//here we move each item
			$parallaxItemsH.each(function(){
				var item 	= $(this);
				var speed	= item.data('speed');  //getting the speed from data atribute
				TweenLite.to(item, 0.5, {
					x: (item.position().left + pageX * speed )*fixer,    //calculate the new X based on mouse position * speed 
					y: (item.position().top + pageY * speed)*fixer
				});
			});
		});
    }
});

function addressHist(){
	var addressURL = $(location).attr('href');
	history.pushState(null, null, addressURL);
}