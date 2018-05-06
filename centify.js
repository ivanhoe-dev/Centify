!(function($) {
	"use strict";
	$.fn.extend({
		centify: function(options) {
			options = $.extend({}, $.centify.defaults, options);
			return new $.centify(this, options);
		}
	});
	$.centify = function(elements, options) {
		elements.each(function(){
			alignment.alignElementHor(this, options);
			alignment.alignElementVer(this, options);
			alignment.alignTextHor(this, options);
			alignment.alignTextVer(this, options);
		});
		return this;
	}
	
	var alignment = {
		alignElementHor:function(element, options){
			if(options.align_element_x=="left"){
				$(element).css("left","0px");
			}
			else if(options.align_element_x=="right"){
				$(element).css("right","0px");
			} else{
				var width = $(element).outerWidth();
				$(element).css("position","absolute");
				$(element).css("left","50%");
				$(element).css("margin-left","-"+width/2+"px");
			}
		},
		alignElementVer:function(element, options){
			if(options.align_element_y=="top"){
				$(element).css("top","0px");
			}
			else if(options.align_element_y=="bottom"){
				$(element).css("bottom","0px");
			} else{
				var height = $(element).height();
				$(element).css("position","absolute");
				$(element).css("top","50%");
				$(element).css("margin-top","-"+height/2+"px");
			}
		},
		alignTextHor:function(element, options){
			switch(options.align_text_x){
				case "left":
					$(element).css("text-align","left");
					break;
				case "right":
					$(element).css("text-align","right");
					break;
				case "center":
					$(element).css("text-align","center");
					break;
			}
		},
		alignTextVer:function(element, options){
			//create unique DOM id for new div tag
			var hashCode = hash.uniqueHashCode();
			//make sure the dom id is unque
			while($("#"+hashCode).length!=0){
				Math.random().hashCode = hash.uniqueHashCode();
			}
			//align the text vertically
			var content = $(element).html();
			$(element).html("<div id='"+hashCode+"'>"+content+"</div>");
			$("#"+hashCode).css("display","table-cell");
			$(element).css("display","table");
			if(options.align_text_y=="top"||options.align_text_y=="bottom"){
				$("#"+hashCode).css("vertical-align",options.align_text_y);
			}
			else{
				$("#"+hashCode).css("vertical-align","middle");
			}
		}
	}
	
	var hash = {
		uniqueHashCode:function(){
			var seed = Math.random().toString();
			var hash = 0;
			if (seed.length == 0) {
				return hash;
			}
			for (var i = 0; i < seed.length; i++) {
				var char = seed.charCodeAt(i);
				hash = ((hash<<5)-hash)+char;
				hash = hash & hash; // Convert to 32bit integer
			}
			return hash;
		}
	}
	
	$.centify.defaults = {
		align_element_x: "center",	//left,center,right
		align_element_y: "center",	//top,middle,bottom
		align_text_x : "center",	//left,center,right
		align_text_y : "center"		//top,middle,bottom
	}
})(window.jQuery);