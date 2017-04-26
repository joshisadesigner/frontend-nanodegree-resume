var gulp            = require( 'gulp' ),
    sass            = require( 'gulp-sass' ),
    sourcemaps      = require( 'gulp-sourcemaps' ),
    autoprefixer    = require( 'gulp-autoprefixer' ),
    browserSync     = require( 'browser-sync').create(),
    useref          = require( 'gulp-useref' ),
    uglify          = require( 'gulp-uglify' ),
    gulpIf          = require( 'gulp-if' ),
    cssnano         = require( 'gulp-cssnano' ),
    imagemin        = require( 'gulp-imagemin' ),
    cache           = require( 'gulp-cache' ),
    del             = require( 'del' ),
    runSequence     = require( 'run-sequence' );

var reload = browserSync.reload;

gulp.task( 'styles', function(){
    return gulp.src( 'app/css/sass/*.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass( {
            outputStyle: 'expanded'
        } ).on( 'error', sass.logError ) )
        .pipe( autoprefixer( {
            browsers: [ 'last 2 versions' ],
            cascade: true
        } ) )
        .pipe( sourcemaps.write( './maps' ) )
        .pipe( gulp.dest( 'app/css' ) )
} );

gulp.task( 'useref', function(){
    return gulp.src( 'app/*.html' )
        .pipe( useref() )
        .pipe( gulpIf( '*/.js', uglify() ) )
        .pipe( gulpIf( '*/.css', cssnano() ) )
        .pipe( gulp.dest( 'dist' ))
} )

gulp.task( 'images', function(){
    return gulp.src( 'ap/images/**/*' )
        .pipe( cache( imagemin( {
            interlaced: true
        } ) ) )
        .pipe( gulp.dest( 'dist/images' ) )
} )

gulp.task( 'fonts', function (){
    return gulp.src( 'app/fonts/**/*' )
        .pipe( gulp.dest( 'dist/fonts' ) )
} )

gulp.task( 'clean:dist', function(){
    return del.sync( 'dist' );
} )

gulp.task( 'cache:clear', function( callback ){
    return cache.clearAll( callback );
} )

gulp.task( 'browser', function(){

    browserSync.init( {
        notify: true,
        server: {
            baseDir: 'app',
        }
    } );

    gulp.watch( 'app/css/sass/*.scss', [ 'styles' ] );
    gulp.watch( 'app/*.html', reload );
    gulp.watch( 'app/js/**/*.js', reload );
} );

gulp.task( 'default', function( callback ){
    runSequence(
        'clean:dist',
        [ 'styles', 'useref', 'images', 'fonts' ]
    )
} );

gulp.task( 'serve', function( callback ){
    runSequence(
        [ 'styles', 'browser' ],
        callback
    )
} )
