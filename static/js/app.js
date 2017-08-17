function Ellipses (elementContainer,options){
			const defaultOptions ={
	      	showChar : 10,
	      	ellipsesPosition : "start",
	      	tooltip :{ 
	      		pack : true, 
	      		text : true 
	      	},
	      	ellipsestext : ".."	
	      };
			options=Object.assign({},defaultOptions, options);
			let ellipses=document.querySelectorAll(elementContainer);
            Array.prototype.forEach.call(ellipses, function(element) {
		    let content = element.innerHTML;
		    if(options.showChar=="auto"){
		    element.innerHTML=('<span>'+element.innerHTML.replace(/ /g,'</span> <span>')+'</span>');
		    options.showChar=0;
	      	var words = Array.prototype.slice.call(element.querySelectorAll("span"),0).reverse();
			for(var i=0,c=words.length;i<c;i++)
			{
    			var wordSpan = words[i];
    			var spanBottom = wordSpan.offsetHeight + wordSpan.offsetTop;
    			var spanLeft = wordSpan.offsetLeft;
    			 var spanRight = spanLeft+wordSpan.offsetWidth;
    			 options.showChar=options.showChar+wordSpan.innerHTML.length+1;
    			 if(spanBottom <= element.offsetHeight && spanLeft <= element.offsetWidth && spanRight <= element.offsetWidth)
    			{
    				options.showChar=content.length-options.showChar;
        			break;
    			}
			}
	      }

	      		element.innerHTML=content;
                  if (content.length > options.showChar) {
                  	let c,h;
                  	 if(options.ellipsesPosition == "end"){
                     	c = content.substr(0, options.showChar);
                     	h = content.substr(options.showChar, content.length - options.showChar);
                        c = c  + '<span class="tooltip">' + options.ellipsestext + '&nbsp;';
                     }	
                     else if(options.ellipsesPosition = "start"){
                     	c = content.substr(content.length-options.showChar, content.length);
                     	h = content.substr(0, content.length - options.showChar);
                        c = '<span class="tooltip">' + options.ellipsestext + '&nbsp;' + c;

                     }
                     c=c+(options.tooltip.pack ? '<span class="tooltiptext">'+(options.tooltip.text?h:content)+'</span>':'</span>');
                     element.innerHTML=c;
                  }
            });
	      }
	    