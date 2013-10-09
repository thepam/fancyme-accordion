/* FancyMe Accordion Plugin
 * By Pamela Rodriguez
 * Free to use
 * Link backs are appreciated :)
 * www.thepamrdz.com
 */
 
(function($){  
  
$.fn.fancymeaccordion = function(params){  
  params = $.extend( {
	  theme: 'blue', // Available themes: blue, red, orange, green, pink, black, yellow, and purple
	  actives: 'all', // Changing to 'one' lets only one menu be shown at a time. Default is 'all' can be shown
	  speed: 'fast' //Speed in which menus open or close
	  }, params);
  var main = $(this);
  main.addClass('fancyme-accordion'); //Adds the FancyMe Accordion class to the element
  main.addClass(params.theme); //Adds the theme class
  main.find('ul').hide();
  main.find('h2.active').next().show();
  main.find('h2').click(function(){ //Adds the click event to the <H2> elements
	 if($(this).next().is(':visible')){ //Checks if the next available <UL> element is visible
		$(this).next().slideUp(params.speed);
		$(this).removeClass('active');	 
	 }
	 else{
		if(params.actives == 'one'){//Verifies the number of menus that can be shown at a time
			main.find('ul').slideUp();		
			main.find('h2').removeClass('active');
		}
		$(this).next().slideDown(params.speed); 
		$(this).addClass('active');	 
	 }
  });
  
};  
  
})(jQuery); 