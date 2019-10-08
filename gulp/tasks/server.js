module.exports = function () {
	$.gulp.task( 'server', function () {
		// .init starts the server
		$.bs.init( {
			server : "./build"
		} );
	} );

};