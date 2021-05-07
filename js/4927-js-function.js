/////////////////////////////////////////////////////////////////
// Сбрасываем стандартное поведение при нажатии на ссылку с href="#", при верстке очень удобно когда ссылки пустые
$('[href="#"]').click(function(event) {
	event.preventDefault();
});

// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
$('[data-scroll-to]').click( function(){
	$('.mobileMenu').removeClass('active');
    $('.header__logo').removeClass('disabled');
    $('.navbar').removeClass('active');
    $('.navbar__item').removeClass('enabled animated fadeInDown');
    $('.header__burger').removeClass('active');
	$('html, body').removeClass('no-scroll');
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length != 0) {
	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	}
	return false;
});


$( document ).ready(function() {
		$('#myStat').circliful();
		$('#myStat2').circliful();
		$('#myStat3').circliful();

		$('.animate-up, .sectionName').addClass("hidden").viewportChecker({
	        classToAdd: 'visible animated fadeInUp',
	        offset: 200
       });
		$('.animate-right').addClass("hidden").viewportChecker({
	        classToAdd: 'visible animated fadeInRight',
	        offset: 200
       });
		$('.animate-left').addClass("hidden").viewportChecker({
	        classToAdd: 'visible animated fadeInLeft',
	        offset: 200
       });
		$('.animate-down').addClass("hidden").viewportChecker({
	        classToAdd: 'visible animated fadeInDown',
	        offset: 200
       });

	   setTimeout(function getMansory () {
		   $('.seventhScreen__portfolio').masonry({
   			// options
   			itemSelector: '.seventhScreen__item',
   			// percentPosition: true,
   			horizontalOrder: true
   			// fitWidth: true
   		});

	}, 2000);

});

function resizeDiagramm() {
	if ($(window).width() < 498) {
		$('#myStat, #myStat2, #myStat3').attr('data-dimension', '110');
		$('#myStat, #myStat2, #myStat3').attr('data-width', '2');
	}
}

resizeDiagramm()

$('.teamSlider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
});

$('.ninthScreen__content').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
});

$('.newsScreen__content').slick({
    dots: true,
    arrows: false,
	vertical: true,
	verticalSwiping: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
});

$('#openMap_js').click(function() {
	console.log('Map');
	$('.mapScreen__overlap').addClass('hiden-map');
});

$('.header__burger').click(function(e) {
    $('.mobileMenu').toggleClass('active');
    $('.header__logo').toggleClass('disabled');
    $('.navbar').toggleClass('active');
    $('.navbar__item').toggleClass('enabled animated fadeInDown');
    $('.header__burger').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});

function getMansory() {
	$('.seventhScreen__portfolio').masonry({
	 // options
	 itemSelector: '.seventhScreen__item',
	 // percentPosition: true,
	 horizontalOrder: true
	 // fitWidth: true
 });
}

$('.filter').click(function() {
	$(this).closest('.portfolioFilter').find('.portfolioFilter__item').removeClass('activeFilter');
    $(this).closest('.portfolioFilter__item').addClass('activeFilter');
	let item = $(this).find('input').val();

		switch (item) {
			case 'print':
				$('[data-show]').hide(100);
				setTimeout(function () {
					$('[data-show=print]').show();
					getMansory();
				}, 200);
				break;
			case 'identity':
				$('[data-show]').hide(100);
				setTimeout(function () {
					$('[data-show=identity]').show();
					getMansory();
				}, 200);
				break;
			case 'branding':
				$('[data-show]').hide(100);
				setTimeout(function () {
					$('[data-show=branding]').show();
					getMansory();
				}, 200);
				break;
			case 'web':
				$('[data-show]').hide(100);
				setTimeout(function () {
					$('[data-show=web]').show();
					getMansory();
				}, 200);
				break;
			case 'html':
				$('[data-show]').hide(100);
				setTimeout(function () {
					$('[data-show=html]').show();
					getMansory();
				}, 200);
				break;
			case 'wordpress':
				$('[data-show]').hide(100);
				setTimeout(function () {
					$('[data-show=wordpress]').show();
					getMansory();
				}, 200);
				break;
			default:
			$('[data-show]').show();
			getMansory();
		}
});

///////////////////
$('.priceScreen__item')
	.mouseenter(function () {
	let item = $(this).find('.priceScreen__list');
	item.show();
	setTimeout(function () {
		item.addClass('visible');
	}, 100);
})
$('.priceScreen__item')
	.mouseleave(function () {
	$(this).find('.priceScreen__list').hide().removeClass('visible');
})
