module.exports = function () {
	$.gulp.task( 'sass', function () {
		return $.gulp.src( 'src/static/sass/**/*.scss' )
		           .pipe( $.gp.sourcemaps.init() )
		           .pipe( $.gp.sass( {} ) )
		           .pipe( $.gp.autoprefixer( "last 2 version" ) )
		           .on( "error", $.gp.notify.onError( function ( error ) {
			           return "Message to the notifier: " + error.message;
		           } ) )
		           .pipe( $.gp.csso( {} ) )
		           .pipe( $.gp.sourcemaps.write() )
		           .pipe( $.gulp.dest( 'build/static/css' ) )
		           .pipe( $.bs.reload( {
			           stream : true
		           } ) );
	} );
};