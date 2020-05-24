jQuery( document ).ready(function() {
	jQuery('#footer').load('footer.html');
	var d = new Date();
	jQuery('#copyright').html("C"+d.getFullYear());
});
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-54701667-1');