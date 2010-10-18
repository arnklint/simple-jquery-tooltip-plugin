# Simple Tooltip for jQuery

Simple Tooltip is a tiny plugin for making simple tooltips, when hovering over an element. It is written by Jonas Arnklint ( http://arnklint.com ). The goal is to keep it simple, tiny and agile as I'm a fan of KISS. Its functionality includes displaying generic tooltip messages as well as individual messages based on the title attribute of an element. The source was originally extracted from our easy to use CMS Venio at http://venio.se

## Usage

### 1. Include it

.. along with jQuery (i'm including jQuery from G All Mighty in this example):

  <script type="text/javascript" charset="utf-8" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
  <script src="path/to/jquery.simple-tooltip.js" type="text/javascript" charset="utf-8"></script>

### 2. Choose elements

Select elements that you want to display a tooltip when hovering over:

  <script type="text/javascript" charset="utf-8">
    jQuery(document).ready(function(){
      $('#my-link, p span').simpleTooltip({
        title: 'me is a tooltip'
      });
    });
  </script>

Look at   $.fn.simpleTooltip.defaults in source for more options.

### 3. Style it! 

The tooltip gets the "v-tooltip" id so that you can style it however you want with CSS. 

  <style type="text/css" media="screen">
    #v-tooltip {
      position:absolute;
    	background:#000;
    	padding:3px 5px;
    	color:#fff;
    	font-size: 11px;
    	font-family: Arial, Verdana, sans-serif;
    	display:none;
      -moz-border-radius: 3px;
    	-webkit-border-radius: 3px;	
    }
  </style>

### 4. Done!