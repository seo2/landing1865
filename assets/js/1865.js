var oldpagina 	= "";
var pagina 		= "home";

/// NAVEGACIÓN CON PUNTOS

	$('.navigation ul li a').click(function () {
		$('.navigation ul li a').removeClass('active');
		$(this).addClass('active');
	});
	
/// FIN NAVEGACIÓN CON PUNTOS

$('[data-toggle="tooltip"]').tooltip();


$('#home').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	
	$('#home .esquina').addClass('triangulo');
	$('.carga1').removeClass('hide');
	
});

paceOptions = {
      elements: false,
      selectors: '.esquina'
    };
Pace.on('hide', function(){
	$('.navigation').removeClass('hide');
	$('#home').removeClass('hide');
	$('#navbar-example').removeClass('hide');
});    

$('.next').on('click',function(){
	next = $(this).data('next');
	cargaSeccion(next);
});

function cargaSeccion(next){
	if(pagina!=next){
		
		
		$('#'+pagina).css('z-index','0');
		$('#'+next).css('z-index','100');
		$('#'+next).removeClass('hide');
		$('.navigation ul li a').removeClass('active');
		$('.navigation ul li a').each(function(){
			if($(this).data("next")==next){
				$(this).addClass('active');
			}
		});		
		if(pagina=="home"){
			$('#titulo').addClass('fadeOutLeftBig');
		}	
		if(next=="home"){
			$('.carga1').removeClass('hide');
		}	
		
		$('#'+pagina+' .container').addClass('fadeOutLeftBig');
		setTimeout(function(){
			 $('#'+pagina+' .esquina').css({'background-position': 'bottom right'});
			 $('#'+pagina+' .esquina').addClass('termina');
		}, 100);
		
		setTimeout(function(){
			$('#'+next).addClass('termina');
		}, 500);
		
		setTimeout(function(){
			$('#'+next+' .esquina').addClass('triangulo');
		}, 700);
		
		setTimeout(function(){
			oldpagina 	= pagina;
			pagina 		= next;
			limpia(oldpagina);
		}, 900);
	}else{
		ok=1;
	}
};



function limpia(old){
	console.log(old);
	if(old=="home"){
		$('#titulo').removeClass('fadeOutLeftBig');
		$('.carga1').addClass('hide');
	}else if(old=="carmenere" || old=="syrah"){
// 		 $('#'+old+' .esquina').css({'background-position-x': '500px'});
	}
	
	$('#'+old+' .esquina').removeClass('triangulo');	
	$('#'+old+' .esquina').removeClass('termina');
	$('#'+old+' .container').removeClass('fadeOutLeftBig');
	$('#'+old).removeClass('termina');
	$('#'+old).addClass('hide');
	ok=1;
};



var ok = 1;

$(document).keydown(  function(e) {
	
	if(ok==1){
    switch (e.which) {
	    
	    case 38: // up arrow
			if(pagina=='syrah'){
				next = 'sauvignon';
			}else if(pagina=='sauvignon'){
				next = 'malbec';
			}else if(pagina=='malbec'){
				next = 'carmenere';
			}else if(pagina=='carmenere'){
				next = 'cabernet';
			}else if(pagina=='cabernet'){
				next = 'variedades';
			}else if(pagina=='variedades'){
				next = 'home';
			}
			 ok = 0;
			cargaSeccion(next);
	        break;
	    case 40: // down arrow
			if(pagina=='home'){
				next = 'variedades';
			}else if(pagina=='variedades'){
				next = 'cabernet';
			}else if(pagina=='cabernet'){
				next = 'carmenere';
			}else if(pagina=='carmenere'){
				next = 'malbec';
			}else if(pagina=='malbec'){
				next = 'sauvignon';
			}else if(pagina=='sauvignon'){
				next = 'syrah';
			}
			 ok = 0;
			cargaSeccion(next);
	        break;
	    }		
	}

}) ;


$(window).on('mousewheel DOMMouseScroll',function(e) {
	if(ok==1){
		if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta>0) {
	        //scroll down
	        console.log('down');
			if(pagina=='syrah'){
				next = 'sauvignon';
			}else if(pagina=='sauvignon'){
				next = 'malbec';
			}else if(pagina=='malbec'){
				next = 'carmenere';
			}else if(pagina=='carmenere'){
				next = 'cabernet';
			}else if(pagina=='cabernet'){
				next = 'variedades';
			}else if(pagina=='variedades'){
				next = 'home';
			}else if(pagina=='home'){
				next = 'home';
			}
	    }else if(e.originalEvent.detail == 0 || e.originalEvent.wheelDelta == 0) {
	        //scroll up
	        console.log('up');
			if(pagina=='home'){
				next = 'variedades';
			}else if(pagina=='variedades'){
				next = 'cabernet';
			}else if(pagina=='cabernet'){
				next = 'carmenere';
			}else if(pagina=='carmenere'){
				next = 'malbec';
			}else if(pagina=='malbec'){
				next = 'sauvignon';
			}else if(pagina=='sauvignon'){
				next = 'syrah';
			}else if(pagina=='syrah'){
				next = 'syrah';
			}
	    }

		ok = 0;
		cargaSeccion(next);
	}
	//prevent page fom scrolling
    return false;
});


/*
$('.page-left, .page-right').on('mousewheel', $.debounce( 250, function(event, delta) {
    var windowHeight = $(window).height();
    if (delta < 0) {
        prevProject();
    }
    if (delta > 0) {
        nextProject();
    }
}) );
*/

  
  
  
  
   $(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
		$('#navbar-example').css('background','rgba(0,0,0,0.5)');
		$('.navbar-toggler').removeClass('collapsed');
     });
     
    $('.navbar-toggler').on('click',function(){
	    if($(this).hasClass('collapsed')){
		    $('#navbar-example').css('background','rgba(0,0,0,0.5)');
	    }else{
		    $('#navbar-example').css('background','rgba(0,0,0,1)');
	    }
	    
    }); 
       
     
     
 });