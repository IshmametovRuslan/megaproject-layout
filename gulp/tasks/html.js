module.exports = function () {
	$.gulp.task( 'html', function () {
		return $.gulp.src( 'src/html/pages/*.html' )
		        .pipe( $.gulp.dest( 'build' ) )
		        .on( 'end', $.bs.reload );

	} );
};