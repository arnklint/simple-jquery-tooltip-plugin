/*
Made by web ninja Jonas Arnklint. Use it, modify it and...
An MIT license is distributed with this plugins original source.
Originally extracted from the easy to use CMS Venio at http://venio.se.
*/
(function($) {
  $.fn.simpleTooltip = function(options){	
	  var opts = $.extend({}, $.fn.simpleTooltip.defaults, options);
	  
	  return this.each(function(){
	    var me = $(this);
	    var originalTitle = "";
      me.hover(function(e){	
        originalTitle = me.attr('title');
        titleDisplayed = originalTitle && !opts.overrideElementTitle ? originalTitle : opts.title;
        me.attr("title","");
        if(titleDisplayed.length>0){
  	  	  $("body").append("<p id='v-tooltip'>"+titleDisplayed+"</p>");
  	  	  $("#v-tooltip")
  	  	  	.css("top",(e.pageY - opts.xOffset) + "px")
  	  	  	.css("left",(e.pageX + opts.yOffset) + "px")
  	  	  	.fadeIn("fast");
  	  	}	
      },function(){
        me.attr("title", originalTitle);
  	    $("#v-tooltip").remove();
      });	   
  	  me.mousemove(function(e){
  	  	$("#v-tooltip")
  	  		.css("top",(e.pageY - opts.xOffset) + "px")
  	  		.css("left",(e.pageX + opts.yOffset) + "px");
  	  });
	  });
	}
	
  $.fn.simpleTooltip.defaults = {
    title: null, 
    xOffset: 10,
    yOffset: 20, 
    overrideElementTitle: false
  }
})(jQuery);