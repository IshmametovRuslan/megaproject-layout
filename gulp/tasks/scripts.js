module.exports = function () {
	$.gulp.task( 'scripts:lib', function () {
		return $.gulp.src( [ 'node_modules/jquery/dist/jquery.js', 'node_modules/slick-carousel/slick/slick.min.js'] )
		        .pipe( $.gp.concat( 'libs.min.js' ) )
		        .pipe( $.gulp.dest( 'build/static/js' ) )
		        .pipe( $.bs.reload( {
			        stream : true
		        } ) );
	} );

	$.gulp.task( 'scripts', function () {
		return $.gulp.src( ['src/static/js/script.js'] )
		        .pipe( $.gulp.dest( 'build/static/js' ) )
		        .pipe( $.bs.reload( {
			        stream : true
		        } ) );
	} );
};