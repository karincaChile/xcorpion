// JavaScript Document
		jQuery(document).ready(function($) {
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox(
										{closeBtn  : true,
											helpers   : { overlay : {closeClick: true} // prevents closing when clicking OUTSIDE fancybox 
												  },
												 /* keys : {
																close  : null
															  }*/
										});
		});