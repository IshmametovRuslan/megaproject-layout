$( document ).ready( function () {

	portfolio_category();
	slick_slaider();
	slow_scroll();

	function portfolio_category() {
		$( '.portfolio__toggles button' ).click( function () {
			let get_id      = this.id;
			let get_current = $( '.portfolio__posts .' + get_id );

			$( '.post' ).not( get_current ).hide( 500 );
			get_current.show( 500 );
		} );

		$( '#showall' ).click( function () {
			$( '.post' ).show( 500 );
		} );
	}

	function slick_slaider() {
		$( '.slider' ).slick( {
			swipeToSlide : true,
			autoplay : true,
			infinite : true,
			autoplaySpeed : 2000,
			speed : 700,
			slidesToShow : 8,
			adaptiveHeight : true,
			arrows : false,

			responsive : [ {
				breakpoint : 578,
				settings : {
					slidesToShow : 1,
					infinite : true,
					centerMode : true,
				}

			}, {
				breakpoint : 1400,
				settings : {
					slidesToShow : 5,
					infinite : true,
				}

			}, {
				breakpoint : 992,
				settings : {
					slidesToShow : 3,
					infinite : true,
				}
			} ]
		} )
	}
	
	function slow_scroll() {
		$("#header-menu, #footer-menu").on("click","a", function (event) {
			event.preventDefault();
			let id  = $(this).attr('href'),
			    top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	}

} );


