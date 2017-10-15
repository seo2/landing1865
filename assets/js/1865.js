
/// NAVEGACIÓN CON PUNTOS
var parPosition = [];
$('section').each(function() {
    parPosition.push($(this).offset().top);
});

$('a').click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
	return false;
});

$(document).on('scroll', function() {
    var position = $(document).scrollTop(),
        index;
    
    for (var i=0; i<parPosition.length; i++) {
        if (position <= parPosition[i]) {
            index = i;
            break;
        }
    }
    
    $('.navigation ul li a').removeClass('active');
    $('.navigation ul li a:eq('+index+')').addClass('active');
});

	$('.navigation ul li a').click(function () {
	$('.navigation ul li a').removeClass('active');
		$(this).addClass('active');
});   
/// FIN NAVEGACIÓN CON PUNTOS