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
		
		$('#'+next).removeClass('hide');
		$('.navigation ul li a').removeClass('active');
		$('.navigation ul li a').each(function(){
			if($(this).data("next")==next){
				$(this).addClass('active');
			}
		});		
		
		$('#'+next).css('z-index','2');
		if(pagina=="home"){
			$('#titulo').addClass('fadeOutLeftBig');
		}	
		if(next=="home"){
			$('.carga1').removeClass('hide');
		}	
		
		$('#'+pagina+' .container').addClass('fadeOutLeftBig');
		setTimeout(function(){
			 $('#'+pagina+' .esquina').css({'background-position-x': '0'});
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
	}
};



function limpia(old){
	console.log(old);
	if(old=="home"){
		$('#titulo').removeClass('fadeOutLeftBig');
		$('.carga1').addClass('hide');
	}else if(old=="carmenere" || old=="syrah"){
		 $('#'+old+' .esquina').css({'background-position-x': '500px'});
	}
	
	$('#'+old+' .esquina').removeClass('triangulo');	
	$('#'+old+' .esquina').removeClass('termina');
	$('#'+old+' .container').removeClass('fadeOutLeftBig');
	$('#'+old).removeClass('termina');
	$('#'+old).addClass('hide');
	
};