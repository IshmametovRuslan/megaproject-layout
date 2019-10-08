module.exports = function () {
	$.gulp.task( 'image', function () {
		$.gulp.src( 'src/static/img/**/*.+(png|jpg|jpeg|gif|svg)' )
		 .pipe( $.gp.image() )
		 .pipe( $.gulp.dest( 'build/static/img' ) )
		 .pipe( $.bs.reload( {
			 stream : true
		 } ) );
	} );
};
