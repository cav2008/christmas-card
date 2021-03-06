// Include gulp
var gulp = require('gulp');

// Include our plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');

// Lint Javascript task
gulp.task('lint', function() {
    return gulp.src('js/*.js')  //the path of your js files. * all of the js files
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js',
    'bower_components/parallax/deploy/jquery.parallax.js',
    'bower_components/jquery-snowfall/dist/snowfall.jquery.min.js',
    'js/*.js'])
    .pipe(concat('christmas.js'))
    .pipe(gulp.dest('dist/js/'))    //gulp.dest is the destination of the output
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

// Lint CSS task
gulp.task('css-lint', function() {
    return gulp.src('dist/css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

// Watch Files for Changes
gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('dist/css/*.css', ['css-lint']);
    gulp.watch('js/*.js', ['lint', 'scripts']);
});

// Default task
gulp.task('default', ['lint', 'scripts', 'less', 'css-lint']);
