$( document ).ready( function () {
	$( '.portfolio__toggles button' ).click( function () {
		let get_id      = this.id;
		let get_current = $( '.portfolio__posts .' + get_id );

		$( '.post' ).not( get_current ).hide( 500 );
		get_current.show( 500 );
	} );

	$( '#showall' ).click( function () {
		$( '.post' ).show( 500 );
	} );


} );
$( document ).ready( function () {
	$( '.slider' ).slick( {
		swipeToSlide : true,
		autoplay : true,
		infinite : true,
		autoplaySpeed : 2000,
		speed : 700,
		slidesToShow : 8,
		adaptiveHeight : true,
		arrows: false,

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
} );
