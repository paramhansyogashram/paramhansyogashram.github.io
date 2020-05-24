jQuery( document ).ready(function() {
	jQuery('#header').load('header.html',function(){
		if(document.location.href!="https://www.paramhansyogashram.com/"){
			jQuery("#header li").removeClass("active");
			var currElementHfef = jQuery('#header li a').filter(function(){
	  			return this.href === location.href;
			});
			if(currElementHfef.length == 1){
				jQuery(currElementHfef[0]).parent().addClass("active");
			}
		}
	});
	jQuery('#footer').load('footer.html',function(){
		var d = new Date();
		jQuery('#copyright').html(d.getFullYear());
	});
	
});
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-54701667-1');