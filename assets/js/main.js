/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

const goodhikes = document.getElementById("goodhikes");
const eventwild = document.getElementById("eventwild");
const esena = document.getElementById("esena");
const chefsbook = document.getElementById("chefsbook");

goodhikes.addEventListener('mouseenter', () => {
	document.getElementById("goodhikes-modal").style.display = "block"
});
goodhikes.addEventListener('mouseleave', () => {
	document.getElementById("goodhikes-modal").style.display = "none"
});

eventwild.addEventListener('mouseenter', () => {
	document.getElementById("eventwild-modal").style.display = "block"
});
eventwild.addEventListener('mouseleave', () => {
	document.getElementById("eventwild-modal").style.display = "none"
});

esena.addEventListener('mouseenter', () => {
	document.getElementById("esena-modal").style.display = "block"
});
esena.addEventListener('mouseleave', () => {
	document.getElementById("esena-modal").style.display = "none"
});

chefsbook.addEventListener('mouseenter', () => {
	document.getElementById("chefsbook-modal").style.display = "block"
});
chefsbook.addEventListener('mouseleave', () => {
	document.getElementById("chefsbook-modal").style.display = "none"
});
