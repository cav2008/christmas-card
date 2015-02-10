// Include gulp
var gulp = require('gulp');

// Include our plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// Lint task
gulp.task('lint', function() {
    return gulp.src('js/*.js')  //the path of your js files. * all of the js files
        .pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js', 
    'bower_components/parallax/deploy/jquery.parallax.js', 'js/*.js'])
        .pipe(concat('christmas.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(rename('christmas.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

// Compile LESS
gulp.task('less', function() {
    return gulp.src('less/styles.less')
        .pipe(less({paths: ['less/']}))
	.pipe(rename('styles.css'))
	.pipe(gulp.dest('dist/css/'));
});

// Watch Files for Changes
gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
});

// Default task
gulp.task('default', ['lint', 'scripts', 'less']);
